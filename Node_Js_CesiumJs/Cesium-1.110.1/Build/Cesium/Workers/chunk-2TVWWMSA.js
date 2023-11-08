/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.110.1
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as le}from"./chunk-W6HUVIKD.js";import{a as Z}from"./chunk-TGTYSVRM.js";import{a as R}from"./chunk-BV3RKX5O.js";import{f as _,i as se}from"./chunk-O5E7EBKP.js";import{a as ae,b as v,d as $}from"./chunk-GMFQULD7.js";import{a as e,b as ce,d as j}from"./chunk-4ZQSV4FU.js";import{a as Q}from"./chunk-CLQ5X6HS.js";var we={ROUNDED:0,MITERED:1,BEVELED:2},L=Object.freeze(we);var g=[new e,new e],ge=new e,pe=new e,xe=new e,Se=new e,Te=new e,Ee=new e,Be=new e,Ce=new e,ze=new e,P=new e,W=new e,I={},ee=new ce;function Ae(o,c){let a=new Array(o.length);for(let r=0;r<o.length;r++){let t=o[r];ee=c.cartesianToCartographic(t,ee),a[r]=ee.height,o[r]=c.scaleToGeodeticSurface(t,t)}return a}function te(o,c,a,r){let t=o[0],n=o[1],f=e.angleBetween(t,n),s=Math.ceil(f/r),m=new Array(s),l;if(c===a){for(l=0;l<s;l++)m[l]=c;return m.push(a),m}let y=(a-c)/s;for(l=1;l<s;l++){let x=c+l*y;m[l]=x}return m[0]=c,m.push(a),m}var X=new e,Y=new e;function Oe(o,c,a,r){let t=new R(a,r),n=t.projectPointOntoPlane(e.add(a,o,X),X),f=t.projectPointOntoPlane(e.add(a,c,Y),Y),s=$.angleBetween(n,f);return f.x*n.y-f.y*n.x>=0?-s:s}var je=new e(-1,0,0),N=new v,De=new v,re=new j,Me=j.IDENTITY.clone(),ve=new e,Ne=new ae,ie=new e;function D(o,c,a,r,t,n,f,s){let m=ve,l=Ne;N=se.eastNorthUpToFixedFrame(o,t,N),m=v.multiplyByPointAsVector(N,je,m),m=e.normalize(m,m);let T=Oe(m,c,o,t);re=j.fromRotationZ(T,re),ie.z=n,N=v.multiplyTransformation(N,v.fromRotationTranslation(re,ie,De),N);let y=Me;y[0]=f;for(let x=0;x<s;x++)for(let i=0;i<a.length;i+=3)l=e.fromArray(a,i,l),l=j.multiplyByVector(y,l,l),l=v.multiplyByPoint(N,l,l),r.push(l.x,l.y,l.z);return r}var Ve=new e;function ne(o,c,a,r,t,n,f){for(let s=0;s<o.length;s+=3){let m=e.fromArray(o,s,Ve);r=D(m,c,a,r,t,n[s/3],f,1)}return r}function be(o,c){let a=o.length,r=new Array(a*6),t=0,n=c.x+c.width/2,f=c.y+c.height/2,s=o[0];r[t++]=s.x-n,r[t++]=0,r[t++]=s.y-f;for(let m=1;m<a;m++){s=o[m];let l=s.x-n,T=s.y-f;r[t++]=l,r[t++]=0,r[t++]=T,r[t++]=l,r[t++]=0,r[t++]=T}return s=o[0],r[t++]=s.x-n,r[t++]=0,r[t++]=s.y-f,r}function fe(o,c){let a=o.length,r=new Array(a*3),t=0,n=c.x+c.width/2,f=c.y+c.height/2;for(let s=0;s<a;s++)r[t++]=o[s].x-n,r[t++]=0,r[t++]=o[s].y-f;return r}var me=new _,ue=new e,he=new j;function ye(o,c,a,r,t,n,f,s,m,l){let T=e.angleBetween(e.subtract(c,o,P),e.subtract(a,o,W)),y=r===L.BEVELED?0:Math.ceil(T/Q.toRadians(5)),x;t?x=j.fromQuaternion(_.fromAxisAngle(e.negate(o,P),T/(y+1),me),he):x=j.fromQuaternion(_.fromAxisAngle(o,T/(y+1),me),he);let i,d;if(c=e.clone(c,ue),y>0){let M=l?2:1;for(let w=0;w<y;w++)c=j.multiplyByVector(x,c,c),i=e.subtract(c,o,P),i=e.normalize(i,i),t||(i=e.negate(i,i)),d=n.scaleToGeodeticSurface(c,W),f=D(d,i,s,f,n,m,1,M)}else i=e.subtract(c,o,P),i=e.normalize(i,i),t||(i=e.negate(i,i)),d=n.scaleToGeodeticSurface(c,W),f=D(d,i,s,f,n,m,1,1),a=e.clone(a,ue),i=e.subtract(a,o,P),i=e.normalize(i,i),t||(i=e.negate(i,i)),d=n.scaleToGeodeticSurface(a,W),f=D(d,i,s,f,n,m,1,1);return f}I.removeDuplicatesFromShape=function(o){let c=o.length,a=[];for(let r=c-1,t=0;t<c;r=t++){let n=o[r],f=o[t];$.equals(n,f)||a.push(f)}return a};I.angleIsGreaterThanPi=function(o,c,a,r){let t=new R(a,r),n=t.projectPointOntoPlane(e.add(a,o,X),X),f=t.projectPointOntoPlane(e.add(a,c,Y),Y);return f.x*n.y-f.y*n.x>=0};var Fe=new e,Ge=new e;I.computePositions=function(o,c,a,r,t){let n=r._ellipsoid,f=Ae(o,n),s=r._granularity,m=r._cornerType,l=t?be(c,a):fe(c,a),T=t?fe(c,a):void 0,y=a.height/2,x=a.width/2,i=o.length,d=[],M=t?[]:void 0,w=ge,O=pe,h=xe,S=Se,B=Te,C=Ee,z=Be,u=Ce,E=ze,p=o[0],V=o[1];S=n.geodeticSurfaceNormal(p,S),w=e.subtract(V,p,w),w=e.normalize(w,w),u=e.cross(S,w,u),u=e.normalize(u,u);let b=f[0],A=f[1];t&&(M=D(p,u,T,M,n,b+y,1,1)),E=e.clone(p,E),p=V,O=e.negate(w,O);let F,G;for(let U=1;U<i-1;U++){let oe=t?2:1;if(V=o[U+1],p.equals(V)){le("Positions are too close and are considered equivalent with rounding error.");continue}w=e.subtract(V,p,w),w=e.normalize(w,w),h=e.add(w,O,h),h=e.normalize(h,h),S=n.geodeticSurfaceNormal(p,S);let q=e.multiplyByScalar(S,e.dot(w,S),Fe);e.subtract(w,q,q),e.normalize(q,q);let H=e.multiplyByScalar(S,e.dot(O,S),Ge);if(e.subtract(O,H,H),e.normalize(H,H),!Q.equalsEpsilon(Math.abs(e.dot(q,H)),1,Q.EPSILON7)){h=e.cross(h,S,h),h=e.cross(S,h,h),h=e.normalize(h,h);let k=1/Math.max(.25,e.magnitude(e.cross(h,O,P))),K=I.angleIsGreaterThanPi(w,O,p,n);K?(B=e.add(p,e.multiplyByScalar(h,k*x,h),B),C=e.add(B,e.multiplyByScalar(u,x,C),C),g[0]=e.clone(E,g[0]),g[1]=e.clone(C,g[1]),F=te(g,b+y,A+y,s),G=Z.generateArc({positions:g,granularity:s,ellipsoid:n}),d=ne(G,u,l,d,n,F,1),u=e.cross(S,w,u),u=e.normalize(u,u),z=e.add(B,e.multiplyByScalar(u,x,z),z),m===L.ROUNDED||m===L.BEVELED?ye(B,C,z,m,K,n,d,l,A+y,t):(h=e.negate(h,h),d=D(p,h,l,d,n,A+y,k,oe)),E=e.clone(z,E)):(B=e.add(p,e.multiplyByScalar(h,k*x,h),B),C=e.add(B,e.multiplyByScalar(u,-x,C),C),g[0]=e.clone(E,g[0]),g[1]=e.clone(C,g[1]),F=te(g,b+y,A+y,s),G=Z.generateArc({positions:g,granularity:s,ellipsoid:n}),d=ne(G,u,l,d,n,F,1),u=e.cross(S,w,u),u=e.normalize(u,u),z=e.add(B,e.multiplyByScalar(u,-x,z),z),m===L.ROUNDED||m===L.BEVELED?ye(B,C,z,m,K,n,d,l,A+y,t):d=D(p,h,l,d,n,A+y,k,oe),E=e.clone(z,E)),O=e.negate(w,O)}else d=D(E,u,l,d,n,b+y,1,1),E=p;b=A,A=f[U+1],p=V}g[0]=e.clone(E,g[0]),g[1]=e.clone(p,g[1]),F=te(g,b+y,A+y,s),G=Z.generateArc({positions:g,granularity:s,ellipsoid:n}),d=ne(G,u,l,d,n,F,1),t&&(M=D(p,u,T,M,n,A+y,1,1)),i=d.length;let de=t?i+M.length:i,J=new Float64Array(de);return J.set(d),t&&J.set(M,i),J};var $e=I;export{L as a,$e as b};
