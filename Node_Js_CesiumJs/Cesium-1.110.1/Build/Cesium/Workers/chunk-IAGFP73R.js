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

import{a as W}from"./chunk-HL2OONDA.js";import{a as Z}from"./chunk-EUSUDYW7.js";import{a as X}from"./chunk-XYZU5ZKW.js";import{b as K,c as Q,d as V}from"./chunk-ADEEKX5Q.js";import{d as H}from"./chunk-O5E7EBKP.js";import{a as U}from"./chunk-IS523WNE.js";import{a as r,c as J}from"./chunk-4ZQSV4FU.js";import{a as B}from"./chunk-CLQ5X6HS.js";import{a as u}from"./chunk-FOJGNIAW.js";import{a as P}from"./chunk-UGI536VH.js";import{e as T}from"./chunk-BQUQ5TPM.js";var ii=new r(1,1,1),S=Math.cos,q=Math.sin;function x(t){t=u(t,u.EMPTY_OBJECT);let o=u(t.radii,ii),n=u(t.innerRadii,o),k=u(t.minimumClock,0),w=u(t.maximumClock,B.TWO_PI),d=u(t.minimumCone,0),l=u(t.maximumCone,B.PI),s=Math.round(u(t.stackPartitions,10)),A=Math.round(u(t.slicePartitions,8)),m=Math.round(u(t.subdivisions,128));if(s<1)throw new P("options.stackPartitions cannot be less than 1");if(A<0)throw new P("options.slicePartitions cannot be less than 0");if(m<0)throw new P("options.subdivisions must be greater than or equal to zero.");if(T(t.offsetAttribute)&&t.offsetAttribute===W.TOP)throw new P("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._radii=r.clone(o),this._innerRadii=r.clone(n),this._minimumClock=k,this._maximumClock=w,this._minimumCone=d,this._maximumCone=l,this._stackPartitions=s,this._slicePartitions=A,this._subdivisions=m,this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}x.packedLength=2*r.packedLength+8;x.pack=function(t,o,n){if(!T(t))throw new P("value is required");if(!T(o))throw new P("array is required");return n=u(n,0),r.pack(t._radii,o,n),n+=r.packedLength,r.pack(t._innerRadii,o,n),n+=r.packedLength,o[n++]=t._minimumClock,o[n++]=t._maximumClock,o[n++]=t._minimumCone,o[n++]=t._maximumCone,o[n++]=t._stackPartitions,o[n++]=t._slicePartitions,o[n++]=t._subdivisions,o[n]=u(t._offsetAttribute,-1),o};var $=new r,G=new r,b={radii:$,innerRadii:G,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};x.unpack=function(t,o,n){if(!T(t))throw new P("array is required");o=u(o,0);let k=r.unpack(t,o,$);o+=r.packedLength;let w=r.unpack(t,o,G);o+=r.packedLength;let d=t[o++],l=t[o++],s=t[o++],A=t[o++],m=t[o++],f=t[o++],E=t[o++],h=t[o];return T(n)?(n._radii=r.clone(k,n._radii),n._innerRadii=r.clone(w,n._innerRadii),n._minimumClock=d,n._maximumClock=l,n._minimumCone=s,n._maximumCone=A,n._stackPartitions=m,n._slicePartitions=f,n._subdivisions=E,n._offsetAttribute=h===-1?void 0:h,n):(b.minimumClock=d,b.maximumClock=l,b.minimumCone=s,b.maximumCone=A,b.stackPartitions=m,b.slicePartitions=f,b.subdivisions=E,b.offsetAttribute=h===-1?void 0:h,new x(b))};x.createGeometry=function(t){let o=t._radii;if(o.x<=0||o.y<=0||o.z<=0)return;let n=t._innerRadii;if(n.x<=0||n.y<=0||n.z<=0)return;let k=t._minimumClock,w=t._maximumClock,d=t._minimumCone,l=t._maximumCone,s=t._subdivisions,A=J.fromCartesian3(o),m=t._slicePartitions+1,f=t._stackPartitions+1;m=Math.round(m*Math.abs(w-k)/B.TWO_PI),f=Math.round(f*Math.abs(l-d)/B.PI),m<2&&(m=2),f<2&&(f=2);let E=0,h=1,L=n.x!==o.x||n.y!==o.y||n.z!==o.z,Y=!1,j=!1;L&&(h=2,d>0&&(Y=!0,E+=m),l<Math.PI&&(j=!0,E+=m));let y=s*h*(f+m),a=new Float64Array(y*3),g=2*(y+E-(m+f)*h),_=Z.createTypedArray(y,g),i,e,v,z,c=0,C=new Array(f),O=new Array(f);for(i=0;i<f;i++)z=d+i*(l-d)/(f-1),C[i]=q(z),O[i]=S(z);let M=new Array(s),R=new Array(s);for(i=0;i<s;i++)v=k+i*(w-k)/(s-1),M[i]=q(v),R[i]=S(v);for(i=0;i<f;i++)for(e=0;e<s;e++)a[c++]=o.x*C[i]*R[e],a[c++]=o.y*C[i]*M[e],a[c++]=o.z*O[i];if(L)for(i=0;i<f;i++)for(e=0;e<s;e++)a[c++]=n.x*C[i]*R[e],a[c++]=n.y*C[i]*M[e],a[c++]=n.z*O[i];for(C.length=s,O.length=s,i=0;i<s;i++)z=d+i*(l-d)/(s-1),C[i]=q(z),O[i]=S(z);for(M.length=m,R.length=m,i=0;i<m;i++)v=k+i*(w-k)/(m-1),M[i]=q(v),R[i]=S(v);for(i=0;i<s;i++)for(e=0;e<m;e++)a[c++]=o.x*C[i]*R[e],a[c++]=o.y*C[i]*M[e],a[c++]=o.z*O[i];if(L)for(i=0;i<s;i++)for(e=0;e<m;e++)a[c++]=n.x*C[i]*R[e],a[c++]=n.y*C[i]*M[e],a[c++]=n.z*O[i];for(c=0,i=0;i<f*h;i++){let p=i*s;for(e=0;e<s-1;e++)_[c++]=p+e,_[c++]=p+e+1}let D=f*s*h;for(i=0;i<m;i++)for(e=0;e<s-1;e++)_[c++]=D+i+e*m,_[c++]=D+i+(e+1)*m;if(L)for(D=f*s*h+m*s,i=0;i<m;i++)for(e=0;e<s-1;e++)_[c++]=D+i+e*m,_[c++]=D+i+(e+1)*m;if(L){let p=f*s*h,N=p+s*m;if(Y)for(i=0;i<m;i++)_[c++]=p+i,_[c++]=N+i;if(j)for(p+=s*m-m,N+=s*m-m,i=0;i<m;i++)_[c++]=p+i,_[c++]=N+i}let F=new X({position:new V({componentDatatype:U.DOUBLE,componentsPerAttribute:3,values:a})});if(T(t._offsetAttribute)){let p=a.length,N=t._offsetAttribute===W.NONE?0:1,I=new Uint8Array(p/3).fill(N);F.applyOffset=new V({componentDatatype:U.UNSIGNED_BYTE,componentsPerAttribute:1,values:I})}return new Q({attributes:F,indices:_,primitiveType:K.LINES,boundingSphere:H.fromEllipsoid(A),offsetAttribute:t._offsetAttribute})};var Ci=x;export{Ci as a};
