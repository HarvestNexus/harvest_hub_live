

const UserAuth = ()=>{
	return (

		<div>
			<div className="w-{200px} flex flex-row items-center justify-between border">



				<button className="border">
					<img src="/images/signup/apple.png" className=" w-auto h-auto object-contain" />
					<span>Google</span>

				</button>
				<button className="border">
					<img src="/images/signup/google.png" className=" w-full h-full object-contain" />
					<span>Google</span>
					
				</button>
			</div>
			{/*already have an account*/}
				<div className="flex flex-row items-center justify-center gap-1">
					<p>Already have an account? </p><a href="" className="text-green-600">Login</a>
				</div>
		</div>
		)
}
export default UserAuth