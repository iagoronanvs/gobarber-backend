import ICreateNotificationDTO from '../dtos/ICreateNotificationDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepositry {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
