#include <stdio.h>

int main(){
	int n,S=0;
	printf("Nhap n=\n");
	scanf("%d",&n);
	while(n <= 0){
		printf("Nhap lai n=\n");
		scanf("%d",&n);
	}
	for (int i = 1; i < n; ++i)
	{
		if(n%i ==0){
			S+=i;
		}
	}
	if(S == n){
		printf("%d la so hoan hao\n",n );
	}else{
		printf("%d khong phai so hoan hao\n",n );
	}
}