const express = require('express')
const app = express()


app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

app.use("/api",useRouter)
app.use("/auth",authRouter)

 

app.listen(3306 , ()=>
console.log('server is already running'))