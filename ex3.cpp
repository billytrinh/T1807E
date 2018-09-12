#include <stdio.h>

int main(){
	int n;
	printf("Nhap n=\n");
	scanf("%d",&n);
	while(n <= 0){
		printf("Nhap lai n=\n");
		scanf("%d",&n);
	}
	if(n<=3){
		printf("%d la so nguyen to\n",n);
	}else{
		int so_uoc_khac_cua_n = 0;
		for (int i = 2; i < n-1; ++i)
		{
			if(n%i==0){
				so_uoc_khac_cua_n++;
				printf("%d khong phai so nguyen to\n",n);
				break;
			}
		}
		if(so_uoc_khac_cua_n==0){
			printf("%d la so nguyen to\n",n);
		}
	}
}