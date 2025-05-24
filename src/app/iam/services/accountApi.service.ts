import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { AccountResponse } from './account.reponse';
import { AccountEntity } from '../model/account.entity';
import { AccountAssembler } from './account.assembler';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountApiService extends BaseService<AccountResponse> {
  override resourceEndpoint = '/accounts';

  constructor() {
    super();
  }

  public getAccounts(): Observable<AccountEntity[]> {
    return this.getAll().pipe(
      map(response => AccountAssembler.toEntitiesFromResponse(response))
    );
  }

  public getAccountById(id: number): Observable<AccountEntity> {
    return this.getById(id).pipe(
      map(response => AccountAssembler.toEntityFromResource(response))
    );
  }
}
