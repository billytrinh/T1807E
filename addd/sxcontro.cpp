#include<stdio.h>
#include<stdlib.h>
int main(){
	int n;
	printf("n=");
	scanf("%d",&n);
	int *a;
	a = (int *)malloc(n* sizeof(int)); 
	for(int i=0;i<n;i++){
		printf("a[%d]=",i);
		scanf("%d",a+i);
	}
	for(int i=0;i<n;i++){
		for(int k=0;k<n-i-1;k++){
			if(*(a+k)>*(a+k+1){
				int temp=*(a+k);
				*(a+k)=*(a+k+1);
				*(a+k+1)=temp;
			}
		}
	}
	for(int i=0;i<n;i++){
		printf("%d\n",*(a+i));
	}
}
