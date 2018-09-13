#include<stdio.h>

int main(){
	float cap,inrate,interest;
	int year,i;
	printf("Enter Capital Sum\n");
	scanf("%f",&cap);
	printf("Enter Rate of Interest\n");
	scanf("%f",&inrate);
	printf("Enter No of years\n");
	scanf("%d",&year);
	for (i=0;i<year;i++){
		printf("Year\tInterest\tSum\n");
		interest= cap*inrate/100;
		cap+=interest;
		printf("%d\t%f\t%f\n\n",i+1,interest,cap);
	}
}
