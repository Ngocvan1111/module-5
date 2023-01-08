import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from '../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoHangService} from '../service/lo-hang.service';
import {SanPhamService} from '../service/san-pham.service';
import {Router} from '@angular/router';
import {differenceInDays} from 'date-fns';
import {Consignment} from '../model/consignment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {
  products: Product[] = [{id: 0, name: '', origin: '', price: 0, unit: ''}];
  @Input()
  consignment: Consignment = {id: 0, code: '', product: {id: 0, name: '', origin: '',
      price: 0, unit: ''}, amountProduct: 0, importDate: '', dateOfManufacture: '', expirationDate: ''};
  @Output()
  emiter = new EventEmitter();
  editForm: FormGroup;
  constructor(private loHangService: LoHangService,
              private sanPhamService: SanPhamService,
              private router: Router) {
    this.sanPhamService.getAll().subscribe(date => {
      this.products = date;
    });
    this.editForm = new FormGroup({
      id: new FormControl(),
      code: new FormControl(),
      product: new FormControl(),
      amountProduct: new FormControl(),
      importDate: new FormControl(),
      dateOfManufacture: new FormControl(),
      expirationDate: new FormControl(),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.editForm = new FormGroup({
      id: new FormControl(this.consignment?.id),
      code: new FormControl(this.consignment?.code, [Validators.pattern('LH-[0-9]{4}'), Validators.required]),
      product: new FormControl(this.consignment?.product, [Validators.required]),
      amountProduct: new FormControl(this.consignment?.amountProduct, [Validators.min(0), Validators.required]),
      importDate: new FormControl(this.consignment?.importDate, [Validators.required]),
      dateOfManufacture: new FormControl(this.consignment?.dateOfManufacture, [Validators.required]),
      expirationDate: new FormControl(this.consignment?.expirationDate, Validators.required),
    }, [this.checkNgaySanXuat, this.checkNgayNhapHang]);
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  checkNgaySanXuat(createForm: any){
    const ngaySanXuat = new Date(createForm.controls.dateOfManufacture.value) ;
    const ngayHetHan = new Date(createForm.controls.expirationDate.value) ;
    const check = differenceInDays(ngaySanXuat, ngayHetHan);
    console.log(check);
    if (check < 0){
      return { 'validateNgaySanXuat': true};
    }
    return null;
  }

  // tslint:disable-next-line:typedef
  checkNgayNhapHang(createForm: any){
    const ngayNhapHang = new Date(createForm.controls.importDate.value) ;
    const ngayHetHan = new Date(createForm.controls.expirationDate.value) ;
    const check = differenceInDays(ngayNhapHang, ngayHetHan);
    console.log(check);
    if (check < 0){
      return { 'validateNgayNhapHang': true};
    }
    return null;
  }
  compareFn(c1: Consignment, c2: Consignment): boolean {
    return c1.id === c2.id;
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.editForm.value);
    if (this.editForm.invalid){
      this.loHangService.edit(this.editForm.value.id, this.editForm.value).subscribe(date => {
      this.emiter.emit('hello');
      });
      alert('Submit thanh cong');
      this.router.navigateByUrl('').then(r => {});
    }
    else {  alert('Submit thất bại'); }
  }

}
