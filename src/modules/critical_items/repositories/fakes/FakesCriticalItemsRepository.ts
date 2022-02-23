import { uuid } from 'uuidv4';

import ICreateCriticalItemsDTO from '@modules/critical_items/dtos/ICreateCriticalItemsDTO';
import IFindAllCriticalItemsProvidersDTO from '@modules/critical_items/dtos/IFindAllCriticalItemsProvidresDTO';
import ICriticalItemsRepository from '@modules/critical_items/repositories/ICriticalItemsRepository';

import CriticalItems from '@modules/critical_items/infra/typeorm/entities/CriticalItems';
import { id } from 'date-fns/locale';

class FakesCriticalItemsRepository implements ICriticalItemsRepository {
  private critical_items: CriticalItems[] = [];

  private async findAllCriticalItemsProvidres({
    except_criticalItems_id,
  }: IFindAllCriticalItemsProvidersDTO): Promise<CriticalItems[]> {
    const { critical_items } = this;

    return critical_items;
  }

  public async findById(id: string): Promise<CriticalItems | undefined> {
    const findCritical_items = this.critical_items.find(
      critical_items => critical_items.id === id,
    );

    return findCritical_items;
  }

  public async create({
    part_number,
    description,
    stock_obs,
    purchase_obs,
    used_obs,
    responsable,
  }: ICreateCriticalItemsDTO): Promise<CriticalItems> {
    const critical_items = new CriticalItems();

    Object.assign(
      critical_items,
      { id: uuid() },
      part_number,
      description,
      stock_obs,
      purchase_obs,
      used_obs,
      responsable,
    );

    this.critical_items.push(critical_items);

    return critical_items;
  }

  public async delete(id: CriticalItems): Promise<void> {}

  public async findAll(): Promise<CriticalItems[]> {}

  public async save(id: CriticalItems): Promise<CriticalItems> {
    const findIndex = this.critical_items.findIndex(
      findCritical_items => findCritical_items.id === id.id,
    );

    this.critical_items[findIndex] = id;

    return id;
  }
}

export default FakesCriticalItemsRepository;
