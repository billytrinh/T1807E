/**
-------------------------------------------------------------------------
Ho va Ten: Ninh Hoang Hai 
Lop: T1807E - FPT Aptech
Final Project:

De bai: 
Bai tap lon:
Ho ten,Mssv ,Nam sinh,Diem thi,Lan thi
CN1: nhap thong tin sv
CN2: nhap them (m)sv vao danh sach.
CN3: in ra danh sach sinh vien toan bo thoi diem hien tai
CN4: in ra dssv theo thu tu diem cao-> thap
CN5: in ra dssv tu cao -> thap o lan thu 1 
CN6: in ra dssv tu cao -> thap o lan thu 2
CN7: in ra thong ke so luong: gioi>=8,kha >=5 <8,yeu <5.
CN8: in ra ds +so luong truot <5 ,dau >5.
(co 8 nguoi dau. Co 5 nguoi truot).


Project nay co the chia se, copy code, su dung code ma khong can phai bao 
cho nguoi viet. Tuy nhien nguoi viet se KHONG chiu trach nhiem cho nhung 
noi dung trong code. 
Project nay duoc compile bang gcc thay vi g++(c++). Khac biet cua 2 compiler
se giai thich o duoi.
--------------------------------------------------------------------------
**/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct SinhVienX
{
    char HoTen[50];
    char MSSV[50];
    int NamSinh;
    int DiemThi;
    int LanThi;
}SinhVien;



/*
---------------------------------------------------------------------------
Input Number: Ham Nhap So
---------------------------------------------------------------------------
*/

int Input_number(char variable[50])
{
    int n = 0; 
    while (n <= 0)
    {
        printf("Nhap %s = ", variable);
        scanf("%d",&n);
    }
    return n;
}


/*
---------------------------------------------------------------------------
In: In tung sinh vien mot
---------------------------------------------------------------------------
*/
void InTungSinhVien(int i, SinhVien *SVA)
{
	printf("%s\t\t%s \t\t %d\t\t%d\t\t%d\t\t",
		(SVA + i)->HoTen,(SVA + i)->MSSV,
		(SVA + i)->NamSinh, (SVA + i)->DiemThi, (SVA + i)->LanThi);
	printf("\n");
}


/*
---------------------------------------------------------------------------
CopyAll, Swap, SapXepTuCaoDenThap:
- CopyAll: dung memcpy de tao mot danh sach thay the cho danh sach sinh vien
chinh
- Swap: dung memcpy de chuyen doi vi tri cac sinh vien voi nhau
- SapXepTuCaoDenThap: Sap xep cac sinh vien tu diem cao nhat den thap nhat
---------------------------------------------------------------------------
*/
void CopyAll(int SoLuongSinhVien, SinhVien *SVA, SinhVien *SVA_Temp)
{
	for (int i = 0; i < SoLuongSinhVien; i++)
	{
		memcpy(SVA_Temp + i,SVA + i, sizeof(SinhVien));
	}
}

void Swap(SinhVien *a, SinhVien *b)//int SoLuongSinhVien)
{
	SinhVien *c;
    c = (SinhVien *)calloc(1,sizeof(SinhVien));
	memcpy(c, a,sizeof(SinhVien));
	memcpy(a, b,sizeof(SinhVien));
	memcpy(b, c,sizeof(SinhVien));

}

void SapXepTuCaoDenThap(int SoLuongSinhVien, SinhVien *SVA_Temp)
{
	for (int i = 0; i < SoLuongSinhVien - 1; i++)
	{
		for (int j = 0; j < SoLuongSinhVien - i - 1; j++)
		{
			if (((SVA_Temp+j)->DiemThi) < ((SVA_Temp+j+1)->DiemThi))
			{
				Swap((SVA_Temp+j),(SVA_Temp+j+1));
			}
		}
	}
}



/*
---------------------------------------------------------------------------
InSoLuong, InTheoLanThi, InTheoTruotDo
- InSoLuong: In so luong sinh vien theo quy chuan nhat dinh. Vi du:
	+ Hoc Sinh gioi(x la diem): 8<=x<10. Nhu vay input cua ham se chi can
LonHon, NhoHon de co the in ra gioi. Input cua ham la so nguyen
	+ Variable: Loai hoc sinh can in ra, vi du nhu in ra So Luong Gioi thi
Variable = "Gioi".
---------------------------------------------------------------------------
*/
void InSoLuong(char variable[50], int SoLuongSinhVien, int LonHon, int NhoHon, 
	SinhVien *DSSV)
{
	int count = 0;
	for (int i = 0; i < SoLuongSinhVien; i++)
	{
		if (((DSSV+i)->DiemThi >= LonHon) && ((DSSV+i)->DiemThi <= NhoHon))
		{
			count++;
		}
	}
	printf("So Luong %s: %d \n", variable, count);
}


/*
---------------------------------------------------------------------------
Cac ham chinh cho tung chuc nang:
- Menu: in ra menu lua chon cho chuong trinh
- Nhap Sinh Vien: Ham su dung ca nhap sinh vien luc dau va bo sung them sinh
vien 
- SVA_Temp_: ham nay se tao 1 danh sach copy chuyen dung de sap xep hoac 
chinh sua. Danh sach ban dau se khong phai dung den
- In phan loai: in ra danh sach hoc sinh theo lan thi.
	+ Thi lan 1 thi ThiLanMay = 1.
- InTatCa: In toan bo danh sach sinh vien thoi diem hien tai, chua sap
xep
- NhapThemSinhVien: dung de nhap them sinh vien. Co reference cua 
ham NhapSinhVien (giai thich ben duoi)
- InTuCaoDenThap: in ra danh sach sinh vien theo thu tu diem tu cao den 
thap
- InTheoLanThi: In danh sach diem tu cao den thap theo lan thi (co the
chon lan thi 1 hoac 2 chi can 1 ham)
- InThongKeSoLuong: su dung ham InSoLuong. 
- InDanhSachTruotDo.
---------------------------------------------------------------------------
*/

void Menu()
{
	printf("\n------------------------------Menu----------------------------------\n");
	printf("Chao mung cac ban da den voi bai tap lon. Xin hay dua ra lua chon");
	printf("\n1. Nhap so luong sinh vien va thong tin sinh vien.");
	printf("\n2. Nhap them sinh vien.");
	printf("\n3. In ra danh sach sinh vien toan bo thoi diem hien tai.");
	printf("\n4. In ra danh sach sinh vien theo thu tu tu cao den thap.");
	printf("\n5. In ra danh sach sinh vien o lan thi thu 1 theo thu tu tu cao den thap.");
	printf("\n6. In ra danh sach sinh vien o lan thi thu 2 theo thu tu tu cao den thap.");
	printf("\n7. In ra thong ke so luong: Gioi (>=8), Kha (5->8), Yeu(<5).");
	printf("\n8. In ra danh sach so luong truot (<5), dau (>5).");
	printf("\n0. Thoat khoi chuong trinh");
	printf("\n------------------------------------------------------------------\n");
}

void NhapSinhVien(int m1, int m2, SinhVien *SVA)
/* 
m1 va m2: Input tu Sinh Vien thu m1 den m2, vi du nhu ban dau thi nhap 10 
sinh vien truoc, nhu vay thi se la m1 = 0, m2 = 10 (do i<m2).
*/
{
    for (int i = m1; i < m2; i++)
    {
        printf("Nhap ho ten SV%d: ", i + 1);
        scanf("%s", (SVA + i)->HoTen);
        printf("Nhap MSSV SV%d: ", i + 1);
        scanf("%s", (SVA + i)->MSSV);
        printf("Nhap Nam Sinh SV%d: ", i + 1);
        scanf("%d", &((SVA + i)->NamSinh));
        printf("Nhap Diem Thi SV%d: ", i + 1);
        scanf("%d",  &((SVA + i)->DiemThi));
        printf("Nhap Lan Thi (chi 1 hoac 2) SV%d: ", i + 1);
        scanf("%d",  &((SVA + i)->LanThi));  
    }
}

void SVA_Temp_(int SoLuongSinhVien, SinhVien *SVA, SinhVien *SVA_Temp)
{
	CopyAll(SoLuongSinhVien, SVA, SVA_Temp);
}

void InTatCa(int m, SinhVien *SVA)
{
	printf("\nThu tu: HoTen\tMSSV\tNamSinh\tDiemThi\tLanThi\n");
	for (int i = 0; i < m; i++)
	{
		InTungSinhVien(i, SVA);
	}
}


void NhapThemSinhVien(int m1,int m2, SinhVien *SVA)
/* 
Bo sung them sinh vien va nhap tu ban phim
m1 va m2: Input tu Sinh Vien thu m1 den m2 
*/
{
	NhapSinhVien(m2 - m1, m2, SVA);
}

void InTuCaoDenThap(int SoLuongSinhVien, SinhVien *SVA_Temp)
{
	SapXepTuCaoDenThap(SoLuongSinhVien,SVA_Temp);
	InTatCa(SoLuongSinhVien,SVA_Temp);
}

void InTheoLanThi(int SoLuongSinhVien, int ThiLanMay, SinhVien *SVA_Temp)
{
	SapXepTuCaoDenThap(SoLuongSinhVien,SVA_Temp);
	for (int i = 0; i < SoLuongSinhVien; i++)
	{
		if((SVA_Temp+i)->LanThi == ThiLanMay)
		{
			InTungSinhVien(i, SVA_Temp);
		}
	}
}

void InThongKeSoLuong(int SoLuongSinhVien, SinhVien *SVA)
{
	InSoLuong("Gioi",SoLuongSinhVien,8,10,SVA); 
	//Neu su dung g++(c++) de compile thi se co warning convert string to char.
	//Nhung su dung gcc(compiler cua c) thi se khong co warning nay
	InSoLuong("Kha",SoLuongSinhVien,5,7,SVA);
	//Neu su dung g++(c++) de compile thi se co warning convert string to char.
	//Nhung su dung gcc(compiler cua c) thi se khong co warning nay
	InSoLuong("Yeu",SoLuongSinhVien,0,4,SVA);
	//Neu su dung g++(c++) de compile thi se co warning convert string to char.
	//Nhung su dung gcc(compiler cua c) thi se khong co warning nay
}

void InDanhSachTruotDo(int SoLuongSinhVien, SinhVien *SVA_Temp)
{
	printf("Danh sach truot: \n");
	for (int i = 0; i < SoLuongSinhVien; i++)
	{
		if((SVA_Temp+i)->DiemThi < 5)
		{
			InTungSinhVien(i, SVA_Temp);
		}
	}
	printf("\n");

	printf("Danh sach do: \n");
	for (int i = 0; i < SoLuongSinhVien; i++)
	{
		if((SVA_Temp+i)->DiemThi >= 5)
		{
			InTungSinhVien(i, SVA_Temp);
		}
	}
	printf("\n");

	InSoLuong("Truot", SoLuongSinhVien, 0, 4, SVA_Temp);
	//Neu su dung g++(c++) de compile thi se co warning convert string to char.
	//Nhung su dung gcc(compiler cua c) thi se khong co warning nay
	InSoLuong("Do", SoLuongSinhVien, 5, 10, SVA_Temp);
	//Neu su dung g++(c++) de compile thi se co warning convert string to char.
	//Nhung su dung gcc(compiler cua c) thi se khong co warning nay
	printf("\n");
}

void ThoatChuongTrinh(SinhVien *SVA,SinhVien *SVA_Temp)
{
	free(SVA);
    free(SVA_Temp);
    printf("\nChuong Trinh Se Thoat. Cam on ban da su dung Chuong Trinh\n");
}





/*
---------------------------------------------------------------------------
Main
---------------------------------------------------------------------------

*/
int main()
{
	SinhVien *SVA;
	SinhVien *SVA_Temp;
	SVA = 0;
	SVA_Temp = 0;
	int SoLuongSinhVien = 0;
	int SinhVienBoSung;
	int LuaChon;

	char Yes_No; 
     Yes_No   = 'Y';

	while ((Yes_No != 'N') || (Yes_No != 'n'))
	{
		Menu();
		scanf("%d", &LuaChon);
        if (((LuaChon > 1) && (LuaChon < 9))  && (SoLuongSinhVien == 0))
        {
            printf("\nBan chua nhap vao danh sach sinh vien, xin hay nhap lai!\n");
            continue;
        }
		switch(LuaChon)
		{
		case 1:
			SoLuongSinhVien = Input_number("So Luong Sinh Vien");
			//Neu su dung g++(c++) de compile thi se co warning convert string to char.
			//Nhung su dung gcc(compiler cua c) thi se khong co warning nay
			SVA = (SinhVien *) calloc (SoLuongSinhVien, sizeof(SinhVien));
			NhapSinhVien(0, SoLuongSinhVien, SVA);
			SVA_Temp = (SinhVien *) calloc (SoLuongSinhVien, sizeof(SinhVien));
			SVA_Temp_(SoLuongSinhVien, SVA,SVA_Temp);
			break;
		case 2:
			SinhVienBoSung = Input_number("So Luong Sinh Vien Bo Sung");
			//Neu su dung g++(c++) de compile thi se co warning convert string to char.
			//Nhung su dung gcc(compiler cua c) thi se khong co warning nay
			SoLuongSinhVien = SoLuongSinhVien + SinhVienBoSung;
			SVA = (SinhVien *) realloc(SVA, SoLuongSinhVien * sizeof(SinhVien));
			NhapThemSinhVien(SinhVienBoSung, SoLuongSinhVien, SVA);
			SVA_Temp = (SinhVien *) calloc (SoLuongSinhVien, sizeof(SinhVien));
			SVA_Temp_(SoLuongSinhVien, SVA,SVA_Temp);
			break;
		case 3:
			InTatCa(SoLuongSinhVien,SVA);
			break;
		case 4:
			InTuCaoDenThap(SoLuongSinhVien,SVA_Temp);
			break;
		case 5:
			InTheoLanThi(SoLuongSinhVien, 1, SVA_Temp);
			break;
		case 6:
			InTheoLanThi(SoLuongSinhVien, 2, SVA_Temp);
			break;
		case 7:
			InThongKeSoLuong(SoLuongSinhVien, SVA_Temp);
			break;
		case 8:
			InDanhSachTruotDo(SoLuongSinhVien, SVA_Temp);
			break;
		case 0:
			Yes_No = 'N';
			break;
		default:
			printf("\nBan da chon sai lua chon. Xin hay chon lai\n");
			Menu();
			break;
		}
		if (Yes_No == 'N')
		{
            ThoatChuongTrinh(SVA,SVA_Temp);
			break;
		}
		printf("Ban co muon quay tro lai man hinh chinh khong?(AnyKey/N): ");
		scanf("%s", &Yes_No);
        if ((Yes_No == 'N') || (Yes_No == 'n'))
        {
            ThoatChuongTrinh(SVA,SVA_Temp);
            break;
        }
	}
	return 0;
}
//Testttttttttttttttttttttttttttttttttttttt


