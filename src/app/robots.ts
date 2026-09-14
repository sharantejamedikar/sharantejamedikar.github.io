import type { MetadataRoute } from "next";
const siteUrl = "https://portfolio-mu-roan-71.vercel.app";
export default function robots(): MetadataRoute.Robots{return{rules:{userAgent:"*",allow:"/"},sitemap:`${siteUrl}/sitemap.xml`,host:siteUrl}}
