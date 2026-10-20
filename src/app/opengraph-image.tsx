import {ImageResponse} from 'next/og';
export const alt='Sharan Teja Medikar — AI Engineer · Guildford, UK';
export const size={width:1200,height:630};
export const contentType='image/png';
export const dynamic='force-static';
export default function OpenGraphImage(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',padding:'64px',background:'#f4f3ed',color:'#202923',fontFamily:'Arial'}}><div style={{display:'flex',justifyContent:'space-between',fontSize:22,borderBottom:'1px solid #bfc5b9',paddingBottom:25}}><span>SHARAN TEJA MEDIKAR</span><span>Guildford, UK</span></div><div style={{fontSize:92,marginTop:55,letterSpacing:-5}}>AI Engineer.</div><div style={{fontSize:32,marginTop:24,color:'#4f6544'}}>Models · Systems · Delivery</div><div style={{fontSize:26,marginTop:45,maxWidth:880,lineHeight:1.5}}>Evaluated LLM, machine-learning, computer-vision and human-in-the-loop systems.</div><div style={{display:'flex',marginTop:'auto',borderTop:'1px solid #bfc5b9',paddingTop:22,fontSize:18}}>sharantejamedikar.github.io</div></div>,size);}
