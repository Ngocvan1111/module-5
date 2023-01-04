import { Component, OnInit } from '@angular/core';
import {Contract} from '../../../model/contract/contract';
import {ContractService} from '../../../service/contract.service';

@Component({
  selector: 'app-task29-danh-sach-hop-dong',
  templateUrl: './task29-danh-sach-hop-dong.component.html',
  styleUrls: ['./task29-danh-sach-hop-dong.component.css']
})
export class Task29DanhSachHopDongComponent implements OnInit {
  contracts: Contract[] = [];
  p: number = 1;

  constructor(private contractService: ContractService) {
    this.contractService.getAllContract().subscribe(date => {
      this.contracts = date;
    }, error => {}, () => {});
  }

  ngOnInit(): void {
  }

}
