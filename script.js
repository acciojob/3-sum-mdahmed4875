function threeSum(arr, target) {
  //your code here
	let n=arr.length;
	arr.sort((a,b)=>a-b);
	let ans=arr[0]+arr[1]+arr[2];
	for(let i=0;i<n-2;i++){
		let l=i+1;
		let r=n-1;
		while(l<r){
			let sum=arr[i]+arr[l]+arr[r];
			if(Math.abs(sum-target)<Math.abs(ans-target)){
				ans=sum;
			}
			if(sum<target){
				l++;
			}
			else if(sum>target) r++;
			else return ans;
		}
	}
	return ans;
	
}

module.exports = threeSum;
