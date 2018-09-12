#include <stdio.h>

int main(){
	int n,S=0;

	printf("Nhap n=\n");
	scanf("%d",&n);
	while(n <= 0){
		printf("Nhap lai n=\n");
		scanf("%d",&n);
	}
	int i,j;
	if(n%2 == 0){
		j=2;		
	}else{
		j=1;
	}
	for (i = j; i <= n; i+=2)
	{
		S= S + i;
	}
	printf("Tong S= %d\n",S);
	return 0;
}