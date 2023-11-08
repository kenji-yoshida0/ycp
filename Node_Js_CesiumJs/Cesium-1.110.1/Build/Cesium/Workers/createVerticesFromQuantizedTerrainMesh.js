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

import{a as Ct,b as vt}from"./chunk-EUG6TMMH.js";import{a as Mt}from"./chunk-N6UO7CHL.js";import{a as z}from"./chunk-5BUS3425.js";import"./chunk-CAKU43HZ.js";import{a as Wt}from"./chunk-XQLAWHTP.js";import{a as X}from"./chunk-EUSUDYW7.js";import{i as At}from"./chunk-O5E7EBKP.js";import"./chunk-LEJDAZA7.js";import{b as U,c as bt,d as lt}from"./chunk-GMFQULD7.js";import"./chunk-IS523WNE.js";import{a as P,b as wt,c as pt}from"./chunk-4ZQSV4FU.js";import{a as f}from"./chunk-CLQ5X6HS.js";import"./chunk-6Y3U6IMI.js";import"./chunk-7DENS74L.js";import"./chunk-FOJGNIAW.js";import{a as m}from"./chunk-UGI536VH.js";import{e as w}from"./chunk-BQUQ5TPM.js";function T(){m.throwInstantiationError()}Object.defineProperties(T.prototype,{errorEvent:{get:m.throwInstantiationError},credit:{get:m.throwInstantiationError},tilingScheme:{get:m.throwInstantiationError},hasWaterMask:{get:m.throwInstantiationError},hasVertexNormals:{get:m.throwInstantiationError},availability:{get:m.throwInstantiationError}});var Ot=[];T.getRegularGridIndices=function(t,n){if(t*n>=f.FOUR_GIGABYTES)throw new m("The total number of vertices (width * height) must be less than 4,294,967,296.");let o=Ot[t];w(o)||(Ot[t]=o=[]);let e=o[n];return w(e)||(t*n<f.SIXTY_FOUR_KILOBYTES?e=o[n]=new Uint16Array((t-1)*(n-1)*6):e=o[n]=new Uint32Array((t-1)*(n-1)*6),Pt(t,n,e,0)),e};var Gt=[];T.getRegularGridIndicesAndEdgeIndices=function(t,n){if(t*n>=f.FOUR_GIGABYTES)throw new m("The total number of vertices (width * height) must be less than 4,294,967,296.");let o=Gt[t];w(o)||(Gt[t]=o=[]);let e=o[n];if(!w(e)){let r=T.getRegularGridIndices(t,n),s=Lt(t,n),i=s.westIndicesSouthToNorth,c=s.southIndicesEastToWest,h=s.eastIndicesNorthToSouth,E=s.northIndicesWestToEast;e=o[n]={indices:r,westIndicesSouthToNorth:i,southIndicesEastToWest:c,eastIndicesNorthToSouth:h,northIndicesWestToEast:E}}return e};var kt=[];T.getRegularGridAndSkirtIndicesAndEdgeIndices=function(t,n){if(t*n>=f.FOUR_GIGABYTES)throw new m("The total number of vertices (width * height) must be less than 4,294,967,296.");let o=kt[t];w(o)||(kt[t]=o=[]);let e=o[n];if(!w(e)){let r=t*n,s=(t-1)*(n-1)*6,i=t*2+n*2,c=Math.max(0,i-4)*6,h=r+i,E=s+c,g=Lt(t,n),d=g.westIndicesSouthToNorth,p=g.southIndicesEastToWest,b=g.eastIndicesNorthToSouth,L=g.northIndicesWestToEast,N=X.createTypedArray(h,E);Pt(t,n,N,0),T.addSkirtIndices(d,p,b,L,r,N,s),e=o[n]={indices:N,westIndicesSouthToNorth:d,southIndicesEastToWest:p,eastIndicesNorthToSouth:b,northIndicesWestToEast:L,indexCountWithoutSkirts:s}}return e};T.addSkirtIndices=function(t,n,o,e,r,s,i){let c=r;i=Z(t,c,s,i),c+=t.length,i=Z(n,c,s,i),c+=n.length,i=Z(o,c,s,i),c+=o.length,Z(e,c,s,i)};function Lt(t,n){let o=new Array(n),e=new Array(t),r=new Array(n),s=new Array(t),i;for(i=0;i<t;++i)s[i]=i,e[i]=t*n-1-i;for(i=0;i<n;++i)r[i]=(i+1)*t-1,o[i]=(n-i-1)*t;return{westIndicesSouthToNorth:o,southIndicesEastToWest:e,eastIndicesNorthToSouth:r,northIndicesWestToEast:s}}function Pt(t,n,o,e){let r=0;for(let s=0;s<n-1;++s){for(let i=0;i<t-1;++i){let c=r,h=c+t,E=h+1,g=c+1;o[e++]=c,o[e++]=h,o[e++]=g,o[e++]=g,o[e++]=h,o[e++]=E,++r}++r}}function Z(t,n,o,e){let r=t[0],s=t.length;for(let i=1;i<s;++i){let c=t[i];o[e++]=r,o[e++]=c,o[e++]=n,o[e++]=n,o[e++]=c,o[e++]=n+1,r=c,++n}return e}T.heightmapTerrainQuality=.25;T.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(t,n,o){return t.maximumRadius*2*Math.PI*T.heightmapTerrainQuality/(n*o)};T.prototype.requestTileGeometry=m.throwInstantiationError;T.prototype.getLevelMaximumGeometricError=m.throwInstantiationError;T.prototype.getTileDataAvailable=m.throwInstantiationError;T.prototype.loadTileDataAvailability=m.throwInstantiationError;var Vt=T;var ht=32767,D=new P,Xt=new P,Zt=new P,u=new wt,Y=new lt;function Jt(t,n){let o=t.quantizedVertices,e=o.length/3,r=t.octEncodedNormals,s=t.westIndices.length+t.eastIndices.length+t.southIndices.length+t.northIndices.length,i=t.includeWebMercatorT,c=t.exaggeration,h=t.exaggerationRelativeHeight,g=c!==1,d=bt.clone(t.rectangle),p=d.west,b=d.south,L=d.east,N=d.north,I=pt.clone(t.ellipsoid),y=t.minimumHeight,v=t.maximumHeight,S=t.relativeToCenter,_=At.eastNorthUpToFixedFrame(S,I),O=U.inverseTransformation(_,new U),G,A;i&&(G=z.geodeticLatitudeToMercatorAngle(b),A=1/(z.geodeticLatitudeToMercatorAngle(N)-G));let j=o.subarray(0,e),q=o.subarray(e,2*e),Q=o.subarray(e*2,3*e),R=w(r),l=new Array(e),M=new Array(e),et=new Array(e),It=i?new Array(e):[],gt=g?new Array(e):[],W=Xt;W.x=Number.POSITIVE_INFINITY,W.y=Number.POSITIVE_INFINITY,W.z=Number.POSITIVE_INFINITY;let C=Zt;C.x=Number.NEGATIVE_INFINITY,C.y=Number.NEGATIVE_INFINITY,C.z=Number.NEGATIVE_INFINITY;let ot=Number.POSITIVE_INFINITY,nt=Number.NEGATIVE_INFINITY,it=Number.POSITIVE_INFINITY,rt=Number.NEGATIVE_INFINITY;for(let a=0;a<e;++a){let x=j[a],Kt=q[a],St=x/ht,xt=Kt/ht,yt=f.lerp(y,v,Q[a]/ht);u.longitude=f.lerp(p,L,St),u.latitude=f.lerp(b,N,xt),u.height=yt,ot=Math.min(u.longitude,ot),nt=Math.max(u.longitude,nt),it=Math.min(u.latitude,it),rt=Math.max(u.latitude,rt);let dt=I.cartographicToCartesian(u);l[a]=new lt(St,xt),M[a]=yt,et[a]=dt,i&&(It[a]=(z.geodeticLatitudeToMercatorAngle(u.latitude)-G)*A),g&&(gt[a]=I.geodeticSurfaceNormal(dt)),U.multiplyByPoint(O,dt,D),P.minimumByComponent(D,W,W),P.maximumByComponent(D,C,C)}let st=tt(t.westIndices,function(a,x){return l[a].y-l[x].y}),ct=tt(t.eastIndices,function(a,x){return l[x].y-l[a].y}),at=tt(t.southIndices,function(a,x){return l[x].x-l[a].x}),ut=tt(t.northIndices,function(a,x){return l[a].x-l[x].x}),mt;y<0&&(mt=new Ct(I).computeHorizonCullingPointPossiblyUnderEllipsoid(S,et,y));let k=y;k=Math.min(k,J(t.westIndices,t.westSkirtHeight,M,l,d,I,O,W,C)),k=Math.min(k,J(t.southIndices,t.southSkirtHeight,M,l,d,I,O,W,C)),k=Math.min(k,J(t.eastIndices,t.eastSkirtHeight,M,l,d,I,O,W,C)),k=Math.min(k,J(t.northIndices,t.northSkirtHeight,M,l,d,I,O,W,C));let Ft=new Wt(W,C,S),V=new vt(S,Ft,k,v,_,R,i,g,c,h),F=V.stride,Bt=e*F+s*F,B=new Float32Array(Bt),ft=0;for(let a=0;a<e;++a){if(R){let x=a*2;Y.x=r[x],Y.y=r[x+1]}ft=V.encode(B,ft,et[a],l[a],M[a],Y,It[a],gt[a])}let Ht=Math.max(0,(s-4)*2),_t=t.indices.length+Ht*3,K=X.createTypedArray(e+s,_t);K.set(t.indices,0);let Tt=1e-4,Et=(nt-ot)*Tt,Nt=(rt-it)*Tt,Yt=-Et,Rt=0,Ut=Et,zt=0,Dt=0,jt=Nt,qt=0,Qt=-Nt,H=e*F;return $(B,H,st,V,M,l,r,I,d,t.westSkirtHeight,G,A,Yt,Rt),H+=t.westIndices.length*F,$(B,H,at,V,M,l,r,I,d,t.southSkirtHeight,G,A,qt,Qt),H+=t.southIndices.length*F,$(B,H,ct,V,M,l,r,I,d,t.eastSkirtHeight,G,A,Ut,zt),H+=t.eastIndices.length*F,$(B,H,ut,V,M,l,r,I,d,t.northSkirtHeight,G,A,Dt,jt),Vt.addSkirtIndices(st,at,ct,ut,e,K,t.indices.length),n.push(B.buffer,K.buffer),{vertices:B.buffer,indices:K.buffer,westIndicesSouthToNorth:st,southIndicesEastToWest:at,eastIndicesNorthToSouth:ct,northIndicesWestToEast:ut,vertexStride:F,center:S,minimumHeight:y,maximumHeight:v,occludeePointInScaledSpace:mt,encoding:V,indexCountWithoutSkirts:t.indices.length}}function J(t,n,o,e,r,s,i,c,h){let E=Number.POSITIVE_INFINITY,g=r.north,d=r.south,p=r.east,b=r.west;p<b&&(p+=f.TWO_PI);let L=t.length;for(let N=0;N<L;++N){let I=t[N],y=o[I],v=e[I];u.longitude=f.lerp(b,p,v.x),u.latitude=f.lerp(d,g,v.y),u.height=y-n;let S=s.cartographicToCartesian(u,D);U.multiplyByPoint(i,S,S),P.minimumByComponent(S,c,c),P.maximumByComponent(S,h,h),E=Math.min(E,u.height)}return E}function $(t,n,o,e,r,s,i,c,h,E,g,d,p,b){let L=w(i),N=h.north,I=h.south,y=h.east,v=h.west;y<v&&(y+=f.TWO_PI);let S=o.length;for(let _=0;_<S;++_){let O=o[_],G=r[O],A=s[O];u.longitude=f.lerp(v,y,A.x)+p,u.latitude=f.lerp(I,N,A.y)+b,u.height=G-E;let j=c.cartographicToCartesian(u,D);if(L){let R=O*2;Y.x=i[R],Y.y=i[R+1]}let q;e.hasWebMercatorT&&(q=(z.geodeticLatitudeToMercatorAngle(u.latitude)-g)*d);let Q;e.hasGeodeticSurfaceNormals&&(Q=c.geodeticSurfaceNormal(j)),n=e.encode(t,n,j,A,u.height,Y,q,Q)}}function tt(t,n){let o;return typeof t.slice=="function"&&(o=t.slice(),typeof o.sort!="function"&&(o=void 0)),w(o)||(o=Array.prototype.slice.call(t)),o.sort(n),o}var Se=Mt(Jt);export{Se as default};
