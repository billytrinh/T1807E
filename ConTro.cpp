#include<stdio.h>
// Nhap a,b tu ban phim.
// Tinh tong a va b bang con tro.
int main(){
	int a, b, c;	
	int *p, *p1, *p2;
	printf("Nhap a: ");
	scanf("%d", &a);
	printf("Nhap b: ");
	scanf("%d", &b);	
	p = &a;
	p1 = &b;
	p2 = &c;
	*p2 = *p + *p1;
	printf("Gia tri cua c: %d", c);	
} 
