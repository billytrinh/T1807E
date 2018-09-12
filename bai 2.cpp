#include<stdio.h>

int main(){
	float tong = 0;
	float ty_le_lai;
	float lai;
	int nam;
	printf("Enter Capital Sum: \n");
	scanf("%f", &tong);
	printf("Enter Rate of Interest: \n");
	scanf("%f", &ty_le_lai);
	printf("Enter No of Year: \n");
	scanf("%d", &nam);
	for(int i=1 ; i <= nam; i++){
		lai = tong*ty_le_lai/100;
		tong = tong + lai;
		printf("Year	Interest	Sum\n");
		printf("%d	%f	%f\n", i, lai, tong);
		printf("\n");
	}
	return 0;
}

