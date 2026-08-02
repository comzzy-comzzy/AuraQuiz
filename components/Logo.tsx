import Link from "next/link";
export function Logo({light=false}:{light?:boolean}){return <Link href="/" className={`logo ${light?"logo-light":""}`} aria-label="Aura Academy home"><span className="logo-mark"><i/><i/><i/></span><span>heyAura</span><b>Academy</b></Link>}
