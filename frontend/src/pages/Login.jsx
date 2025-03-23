import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
    const [loginInput, setLoginInput] = useState({email:"",password:""})
    const [signupInput, setSignupInput] = useState({name:"",email:"",password:""})
    const changeInputHandler =(e,type)=>{
        const {name,value} = e.target;

        if(type ==='signup') {
            setSignupInput({...signupInput, [name]:value})
        }
        else{
            setLoginInput({...loginInput,[name]:value})
        }
    }

    const handleRegistration = (type) =>{
        const inputData = type === "signup" ? signupInput : loginInput
        console.log(inputData)
        //h9MPStPxzOtSBJdy
        //dixitsigdel8
    }
    return (
        <div className="flex items-center justify-center">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Create a new account and click signup when you're done
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" onChange={(e)=>changeInputHandler(e,"signup")} name= "name" value={signupInput.name} placeholder="John Doe" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Email</Label>
                                <Input type="email" onChange={(e)=>changeInputHandler(e,"signup")} name="email" value={signupInput.email} placeholder="john@gmail.com" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Password</Label>
                                <Input type="password" onChange={(e)=>changeInputHandler(e,"signup")} name="password" value={signupInput.password} required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={()=>handleRegistration("signup")}>Sign up</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login your email address and password here. After signup you'll be logged in.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Email</Label>
                                <Input type="email" onChange={(e)=>changeInputHandler(e,"login")} name="email" value={loginInput.email} placeholder="john@gmail.com" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new"> Password</Label>
                                <Input type="password" onChange={(e)=>changeInputHandler(e,"login")} name="password" value={loginInput.password} required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={()=>handleRegistration("login")}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

    )
}

export default Login