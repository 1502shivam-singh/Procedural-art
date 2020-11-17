#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 lb = smoothstep(0.1,0.2,st);
    vec2 tr = smoothstep(0.1,0.2,1.0-st);
    float pct = lb.x*lb.y*tr.x*tr.y;
    color = vec3(pct);

    gl_FragColor = vec4(color,1.0);
}
