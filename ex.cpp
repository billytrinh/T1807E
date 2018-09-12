#include <stdio.h>

int main(){
	int a,b,c;
	printf("Nhap a va b\n");
	scanf("%d %d",&a,&b);
	if(a <= b){
		c = a*b;
		printf("tich 2 so: %d\n",c );
	}else{
		if(b==0){
			printf("Khong chia cho 0\n");
		}else{
			c = a/b;
			printf("thuong 2 so: %d\n",c);
		}
	}
	return 0;
}