export default `
#define PHONG

#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
uniform float time;
varying vec2 vUv;
varying vec3 newPosition;
varying float noise;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#include <common>
#include <packing>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

float random (vec2 st) {
  return fract(sin(dot(st.xy, u_mouse))*u_time);
}

void main() {
  #include <clipping_planes_fragment>

  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);
  //color.r
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  st *= 10.0; // Scale the coordinate system by 10
  vec2 ipos = floor(st);  // get the integer coords

  float rnd = random( ipos );

  vec3 finalColors = vec3(color.b * 1.5, rnd, rnd);
  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.5), 1.0);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_phong_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>

  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

  #include <envmap_fragment>
  #include <premultiplied_alpha_fragment>
  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`;
