// WebGL layer of the hero: a living red sun, 3D orbit rings and drifting embers.
// Loaded lazily by main.js; the CSS sun stays as the fallback until the first frame is drawn.
// World units are CSS pixels on the z = 0 plane, so the sun can sit exactly on `.sun-box`.

import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Group,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  LineLoop,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from 'three'

const FOV = 35

// Ashima Arts 3D simplex noise (MIT)
const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*snoise(p);p*=2.03;a*=.5;}return s;}
`

function sunMaterial() {
  return new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uHit: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec3 vPos; varying vec3 vNormal; varying vec3 vView;
      void main(){
        vPos = position;
        vNormal = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; uniform float uHit;
      varying vec3 vPos; varying vec3 vNormal; varying vec3 vView;
      ${NOISE}
      void main(){
        float t = uTime * .05;
        vec3 p = vPos * 1.7;
        float n = fbm(p + vec3(0., t, t * .7));
        float n2 = fbm(p * 2.4 - vec3(t * 1.4, 0., t));
        float heat = smoothstep(-.9, .9, n * .7 + n2 * .4);
        vec3 deep = vec3(.52, .09, .07);
        vec3 red = vec3(.86, .23, .18);
        vec3 hot = vec3(1., .58, .42);
        vec3 col = mix(deep, red, heat);
        col = mix(col, hot, pow(heat, 3.) * .7);
        vec3 L = normalize(vec3(-.55, .6, .75));
        float diff = clamp(dot(vNormal, L), 0., 1.);
        col *= .72 + .5 * diff;
        float fres = pow(1. - clamp(dot(vNormal, vView), 0., 1.), 2.4);
        col += vec3(1., .42, .3) * fres * .55;
        col *= 1. + uHit * .9;
        gl_FragColor = vec4(col, 1.);
      }`,
  })
}

function glowMaterial() {
  return new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uHit: { value: 0 } },
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; uniform float uHit; varying vec2 vUv;
      void main(){
        float d = length(vUv - .5) * 2.;
        float pulse = .8 + .2 * sin(uTime * 1.05);
        float a = pow(max(0., 1. - d), 2.6) * (.55 * pulse + uHit * .6);
        gl_FragColor = vec4(vec3(.85, .2, .14) * a, a);
      }`,
  })
}

function emberMaterial(pixelRatio) {
  return new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: pixelRatio },
      uBox: { value: [1600, 1000] },
      uScroll: { value: 0 },
      uStrike: { value: new Vector3(0, 0, 0) },
      uStrikeT: { value: -100 },
    },
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    vertexShader: /* glsl */ `
      uniform float uTime, uPixelRatio, uScroll, uStrikeT; uniform vec2 uBox; uniform vec3 uStrike;
      attribute vec4 aSeed;
      varying float vAlpha; varying float vHot; varying float vBig;
      void main(){
        vec3 p = vec3((aSeed.x - .5) * uBox.x, 0., mix(-520., 260., aSeed.z));
        float speed = mix(14., 52., aSeed.w) * (1. + uScroll * 4.);
        float y = mod(aSeed.y * uBox.y + uTime * speed, uBox.y) - uBox.y * .5;
        p.y = y;
        p.x += sin(uTime * .6 + aSeed.w * 30.) * 18. + sin(uTime * .21 + aSeed.y * 12.) * 34.;
        float dt = uTime - uStrikeT;
        vec2 d = p.xy - uStrike.xy;
        float wave = exp(-dt * 2.4) * smoothstep(0., .08, dt) * exp(-length(d) / 280.);
        p.xy += normalize(d + .001) * wave * 200.;
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_Position = projectionMatrix * mv;
        vBig = step(.94, fract(aSeed.w * 7.13));
        float sz = mix(mix(2.2, 5.5, fract(aSeed.x * 3.7)), 18., vBig);
        gl_PointSize = sz * uPixelRatio * (1100. / -mv.z) * (1. + wave * 1.4);
        float edge = smoothstep(uBox.y * .5, uBox.y * .2, abs(y));
        vAlpha = edge * (.5 + .5 * fract(aSeed.x * 13.7)) * (.55 + .45 * sin(uTime * 2. + aSeed.w * 40.)) * mix(1., .16, vBig);
        vHot = fract(aSeed.z * 5.3) + wave;
      }`,
    fragmentShader: /* glsl */ `
      varying float vAlpha; varying float vHot; varying float vBig;
      void main(){
        float d = length(gl_PointCoord - .5);
        float a = smoothstep(.5, mix(.0, .3, vBig), d) * vAlpha;
        vec3 col = mix(vec3(.93, .36, .29), vec3(1., .86, .72), clamp(vHot, 0., 1.));
        gl_FragColor = vec4(col * a, a);
      }`,
  })
}

function circle(radius, segments = 256) {
  const pts = new Float32Array(segments * 3)
  for (let i = 0; i < segments; i++) {
    const a = (i / segments) * Math.PI * 2
    pts[i * 3] = Math.cos(a) * radius
    pts[i * 3 + 1] = Math.sin(a) * radius
  }
  const g = new BufferGeometry()
  g.setAttribute('position', new BufferAttribute(pts, 3))
  return g
}

function dashedCircle(radius, segments = 256) {
  const g = circle(radius, segments + 1)
  const pos = g.getAttribute('position')
  pos.setXYZ(segments, radius, 0, 0)
  return g
}

export default function mountHero3d(hero) {
  const stage = hero.querySelector('.stage')
  const sunBox = hero.querySelector('.sun-box')
  if (!stage || !sunBox) return

  const small = matchMedia('(max-width: 900px)').matches
  const pixelRatio = Math.min(devicePixelRatio || 1, small ? 1.5 : 1.75)

  let renderer
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
  } catch {
    return
  }
  renderer.setPixelRatio(pixelRatio)
  renderer.setClearColor(0x000000, 0)
  const canvas = renderer.domElement
  canvas.className = 'gl'
  canvas.setAttribute('aria-hidden', 'true')
  stage.insertBefore(canvas, sunBox)

  const scene = new Scene()
  const camera = new PerspectiveCamera(FOV, 1, 10, 6000)

  // Sun ------------------------------------------------------------------------------------
  const sunGroup = new Group()
  scene.add(sunGroup)
  const sunMat = sunMaterial()
  const sun = new Mesh(new SphereGeometry(1, 96, 96), sunMat)
  sunGroup.add(sun)
  const glowMat = glowMaterial()
  const glow = new Mesh(new PlaneGeometry(1, 1), glowMat)
  glow.position.z = -2
  sunGroup.add(glow)

  // Orbit rings with two small moons ----------------------------------------------------------
  const rings = new Group()
  sunGroup.add(rings)
  const ringA = new Group()
  const ringB = new Group()
  rings.add(ringA, ringB)
  const dashMat = new LineDashedMaterial({ color: 0xe8d5c0, transparent: true, opacity: 0.32, dashSize: 6, gapSize: 9 })
  const thinMat = new LineBasicMaterial({ color: 0xe8d5c0, transparent: true, opacity: 0.12 })
  const moonMat = new MeshBasicMaterial({ color: 0xf4ebe1 })
  const moonRed = new MeshBasicMaterial({ color: 0xee6a5e })
  let dashLine = null
  let thinLine = null
  const moonA = new Mesh(new SphereGeometry(1, 16, 16), moonMat)
  const moonB = new Mesh(new SphereGeometry(1, 16, 16), moonRed)
  ringA.add(moonA)
  ringB.add(moonB)
  ringA.rotation.set(1.18, 0.22, 0)
  ringB.rotation.set(1.32, -0.42, 0)

  // Embers -------------------------------------------------------------------------------------
  const count = small ? 260 : 650
  const seeds = new Float32Array(count * 4)
  for (let i = 0; i < seeds.length; i++) seeds[i] = Math.random()
  const emberGeo = new BufferGeometry()
  emberGeo.setAttribute('position', new BufferAttribute(new Float32Array(count * 3), 3))
  emberGeo.setAttribute('aSeed', new BufferAttribute(seeds, 4))
  const emberMat = emberMaterial(pixelRatio)
  const embers = new Points(emberGeo, emberMat)
  embers.frustumCulled = false
  const emberGroup = new Group()
  emberGroup.add(embers)
  scene.add(emberGroup)

  // Layout: keep the sun on top of the CSS `.sun-box` -------------------------------------------
  let w = 1
  let h = 1
  let radius = 200
  const home = new Vector3()

  function layout() {
    const r = stage.getBoundingClientRect()
    w = Math.max(1, r.width)
    h = Math.max(1, r.height)
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.position.set(0, 0, h / 2 / Math.tan((FOV * Math.PI) / 360))
    camera.updateProjectionMatrix()

    const b = sunBox.getBoundingClientRect()
    radius = b.width / 2
    home.set(b.left + b.width / 2 - r.left - w / 2, h / 2 - (b.top + b.height / 2 - r.top), 0)
    sun.scale.setScalar(radius)
    glow.scale.setScalar(radius * 3.2)

    dashLine?.geometry.dispose()
    thinLine?.geometry.dispose()
    ringA.remove(dashLine)
    ringB.remove(thinLine)
    dashLine = new Line(dashedCircle(radius * 1.44), dashMat)
    dashLine.computeLineDistances()
    thinLine = new LineLoop(circle(radius * 1.84), thinMat)
    ringA.add(dashLine)
    ringB.add(thinLine)
    moonA.scale.setScalar(Math.max(3, radius * 0.022))
    moonB.scale.setScalar(Math.max(4, radius * 0.03))

    emberMat.uniforms.uBox.value = [w * 1.4, h * 1.25]
  }
  layout()
  new ResizeObserver(layout).observe(stage)

  // Input ----------------------------------------------------------------------------------------
  let px = 0
  let py = 0
  let sx = 0
  let sy = 0
  let hit = 0
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect()
    px = ((e.clientX - r.left) / r.width) * 2 - 1
    py = ((e.clientY - r.top) / r.height) * 2 - 1
  })
  hero.addEventListener('pointerleave', () => {
    px = 0
    py = 0
  })
  hero.addEventListener('strike', (e) => {
    const r = stage.getBoundingClientRect()
    emberMat.uniforms.uStrike.value.set(e.detail.x + (hero.getBoundingClientRect().left - r.left) - w / 2, h / 2 - (e.detail.y + (hero.getBoundingClientRect().top - r.top)), 0)
    emberMat.uniforms.uStrikeT.value = time
    hit = 1
  })

  // Loop: only while the hero is on screen and the tab is visible ---------------------------
  let visible = true
  let raf = 0
  let time = 0
  let last = performance.now()
  let shown = false
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible && !raf) {
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
  }).observe(hero)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && visible && !raf) {
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
  })

  function frame(now) {
    raf = 0
    if (!visible || document.hidden) return
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    time += dt

    sx += (px - sx) * 0.06
    sy += (py - sy) * 0.06
    hit *= 0.9

    const hr = hero.getBoundingClientRect()
    const scroll = Math.min(1, Math.max(0, -hr.top / hr.height))

    sunGroup.position.set(home.x + sx * 22, home.y - sy * 14 - scroll * radius * 0.6, 0)
    sunGroup.scale.setScalar(1 - scroll * 0.18)
    sun.rotation.y = time * 0.04
    rings.rotation.set(sy * 0.18, sx * 0.25, 0)
    ringA.rotation.z = time * 0.12
    ringB.rotation.z = -time * 0.07
    const ra = radius * 1.44
    const rb = radius * 1.84
    moonA.position.set(Math.cos(time * 0.5) * ra, Math.sin(time * 0.5) * ra, 0)
    moonB.position.set(Math.cos(-time * 0.32 + 2) * rb, Math.sin(-time * 0.32 + 2) * rb, 0)

    emberGroup.rotation.set(sy * 0.05, sx * 0.09, 0)
    sunMat.uniforms.uTime.value = time
    sunMat.uniforms.uHit.value = hit
    glowMat.uniforms.uTime.value = time
    glowMat.uniforms.uHit.value = hit
    emberMat.uniforms.uTime.value = time
    emberMat.uniforms.uScroll.value = scroll

    renderer.render(scene, camera)
    if (!shown) {
      shown = true
      hero.classList.add('gl-on')
    }
    raf = requestAnimationFrame(frame)
  }
  raf = requestAnimationFrame(frame)
}
