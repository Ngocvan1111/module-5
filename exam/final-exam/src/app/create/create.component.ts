import { Component, OnInit } from '@angular/core';
import {LoHangService} from '../service/lo-hang.service';
import {SanPhamService} from '../service/san-pham.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {differenceInDays} from 'date-fns';
import {Product} from '../model/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  products: Product[] = [{id: 0, name: '', origin: '', price: 0, unit: ''}];
  createForm: FormGroup;
  constructor(private loHangService: LoHangService,
              private sanPhamService: SanPhamService,
              private router: Router) {
    this.sanPhamService.getAll().subscribe(date => {
      this.products = date;
      console.log(this.loHangService);
    }, error => {}, () => {});
    this.createForm = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.pattern('LH-[0-9]{4}'), Validators.required]),
      product: new FormControl('', [Validators.required]),
      amountProduct: new FormControl('', [Validators.min(0), Validators.required]),
      importDate: new FormControl('', [Validators.required]),
      dateOfManufacture: new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', Validators.required),
}, [this.checkNgaySanXuat, this.checkNgayNhapHang]);
  }

  ngOnInit(): void {
  }
    checkNgaySanXuat(createForm: any){
    const ngaySanXuat = new Date(createForm.controls.dateOfManufacture.value) ;
    const ngayHetHan = new Date(createForm.controls.expirationDate.value) ;
    const check = differenceInDays(ngayHetHan, ngaySanXuat);
    console.log(check);
    if (check < 0){
          return { 'validateNgaySanXuat': true};
    }
    return null;
    }

  checkNgayNhapHang(createForm: any){
    const ngayNhapHang = new Date(createForm.controls.importDate.value) ;
    const ngayHetHan = new Date(createForm.controls.expirationDate.value) ;
    const check = differenceInDays(ngayHetHan, ngayNhapHang);
    console.log(check);
    if (check < 0){
      return { 'validateNgayNhapHang': true};
    }
    return null;
  }

  onSubmit() {
    if (this.createForm.valid){
      this.loHangService.saveLoHang(this.createForm.value).subscribe(date => {
        alert('Nhập hàng thành công !!!');
        this.router.navigateByUrl('');
      });
    }
    else {
      alert(' Nhập hàng thất bại ');
    }
    }

}
