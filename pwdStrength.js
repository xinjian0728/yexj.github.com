function getStrength(passwd){
	intScore = 0;
	if (passwd.match(/[a-z]/)) // [验证]至少一个小写字母
	{
		intScore = (intScore+1)
	} if (passwd.match(/[A-Z]/)) // [验证]至少一个大写字母
	{
		intScore = (intScore+5)
	} // 单一验证
	if (passwd.match(//d+/)) // [验证]至少一个数字
	{
		intScore = (intScore+5)
	} if (passwd.match(/(/d.*/d.*/d)/)) // [验证]至少三个数字
	{
		intScore = (intScore+5)
	} // 特殊字符验证
	if (passwd.match(/[!,@#$%^&*?_~]/)) // [验证]至少一个特殊字符
	{
		intScore = (intScore+5)
	} if (passwd.match(/([!,@#$%^&*?_~].*[!,@#$%^&*?_~])/)) // [验证]至少两个特殊字符
	{
		intScore = (intScore+5)
	} // 复合验证
	if (passwd.match(/[a-z]/) && passwd.match(/[A-Z]/)) // [验证]同时包含大写和小写
	{
		intScore = (intScore+2)
	} if (passwd.match(//d/) && passwd.match(//D/)) // [验证] 同时包含字母和数字
	{
		intScore = (intScore+2)
	} // [验证] 同时包含大写字母，小写字母，数字和特殊字符
	if (passwd.match(/[a-z]/) && passwd.match(/[A-Z]/) && passwd.match(//d/) && passwd.match(/[!,@#$%^&*?_~]/))
	{
		intScore = (intScore+2)
	}
	return intScore;
}
