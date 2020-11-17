#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 quad(in vec2 coord, in float len, in float br){
    vec3 color = vec3(0.0);
    float lr = (1.0-len)/2.0;
    float tb = (1.0-br)/2.0;
    float l = smoothstep(lr,lr,coord.x);
    float r = smoothstep(lr,lr,1.0-coord.x);
    float b = smoothstep(tb,tb,coord.y);
    float t = smoothstep(tb,tb,1.0-coord.y);
    float pct = l*b*r*t;
	return vec3(pct);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 color = quad(st,1.0,0.3);
    gl_FragColor = vec4(color,1.0);
}
