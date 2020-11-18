#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;

  // The DISTANCE from the pixel to the center
    pct = 2.0*distance(st,vec2(0.5));
	//creating circle of radius of 0.5 units
    pct = step(0.5,pct);
    vec3 color = vec3(pct);

	gl_FragColor = vec4( color, 1.0 );
}
