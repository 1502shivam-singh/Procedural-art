#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 quad(in vec2 coord, in float len, in float br, in float left, in float top){
    vec3 color = vec3(0.0);
    float lr = (1.0-len)/2.0;
    float tb = (1.0-br)/2.0;
    float l = smoothstep(lr-left,lr-left,coord.x);
    float r = smoothstep(lr+left,lr+left,1.0-coord.x);
    float b = smoothstep(tb-top,tb-top,coord.y);
    float t = smoothstep(tb+top,tb+top,1.0-coord.y);
    float pct = l*b*r*t;
	return vec3(pct);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 rect1 = quad(st,0.6,0.3,-0.2,0.3);
    vec3 rect2 = quad(st,0.3,0.3,0.3,-0.3);
    vec3 rect3 = quad(st,0.2,0.3,-0.0,-0.3);
	vec3 color = mix(rect1,rect2,0.5);
    color = mix(color,rect3,0.5);
    gl_FragColor = vec4(color,1.0);
}
