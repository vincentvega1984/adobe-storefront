/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsxs as n,jsx as e}from"@dropins/tools/preact-jsx-runtime.js";/* empty css                             */import{Card as k,Icon as l,Image as h}from"@dropins/tools/components.js";import"../chunks/TermsAndConditions.js";import{classes as O}from"@dropins/tools/lib.js";import{S as d}from"../chunks/OrderError.js";import{useText as p}from"@dropins/tools/i18n.js";/* empty css                      *//* empty css                  *//* empty css                       */import{events as S}from"@dropins/tools/event-bus.js";import{useState as v,useCallback as _,useEffect as g}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/preact-compat.js";const N=({className:i,items:r,onRemoveOutOfStock:o,routeCart:a,...m})=>{const s=p({title:"Checkout.OutOfStock.title",message:"Checkout.OutOfStock.message",reviewCart:"Checkout.OutOfStock.actions.reviewCart",removeOutOfStock:"Checkout.OutOfStock.actions.removeOutOfStock"});return n(k,{className:O(["checkout-out-of-stock",i]),"data-testid":"checkout-out-of-stock",variant:"secondary",...m,children:[n("h4",{className:"checkout-out-of-stock__title",children:[e(l,{source:d,size:"16",stroke:"1"}),s.title]}),e("p",{className:"checkout-out-of-stock__message",children:s.message}),e("ol",{className:"checkout-out-of-stock__items",children:r.map(u=>e("li",{"data-testid":"out-of-stock-item",className:"checkout-out-of-stock__item",children:e(h,{loading:"eager",src:u.image.src,alt:u.image.alt,width:"100",height:"100",params:{width:100}})},u.sku))}),n("div",{className:"checkout-out-of-stock__actions",children:[a&&e("a",{"data-testid":"review-cart",className:"checkout-out-of-stock__action",href:a,children:s.reviewCart}),o&&e("button",{className:"checkout-out-of-stock__action","data-testid":"remove-out-of-stock",type:"button",onClick:o,children:s.removeOutOfStock})]})]})},$=({onCartProductsUpdate:i,routeCart:r})=>{const[o,a]=v([]),m=t=>t.outOfStock||t.insufficientQuantity,s=_(()=>{if(!i)return;const t=o.filter(c=>c.outOfStock).map(c=>({uid:c.uid,quantity:0}));i(t)},[o,i]);if(g(()=>{const t=S.on("cart/data",c=>{const f=(c==null?void 0:c.items)||[];a(f.filter(m))},{eager:!0});return()=>{t==null||t.off()}},[]),o.length===0)return null;const u=!o.some(t=>t.insufficientQuantity);return e(N,{items:o,onRemoveOutOfStock:u?s:void 0,routeCart:r==null?void 0:r()})};export{$ as OutOfStock,$ as default};
