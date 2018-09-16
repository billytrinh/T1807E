#include <stdio.h>

int main (){
    int i=1,s=0,n;
    printf("Nhap vao so n ");
    scanf("%d",&n);
    for(i=1;i<n;i++){
        if (n % i == 0)
            s=s+i;
    }
    if(s == n)
    {
        printf("La so hoan hao \n");
    }
    else
    {
        printf("khong phai la so hoan hao \n");
    }
}
