"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;
export function PasswordInput(props: Props){const[visible,setVisible]=useState(false);return <div className="password-wrap"><input {...props} type={visible?"text":"password"}/><button type="button" onClick={()=>setVisible(v=>!v)} aria-label={visible?"Hide password":"Show password"} title={visible?"Hide password":"Show password"}>{visible?<EyeOff/>:<Eye/>}</button></div>}
