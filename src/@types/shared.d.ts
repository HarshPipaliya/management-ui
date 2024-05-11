export interface IApiRequest<T> {
  success: boolean;
  message: string;
  data: T;
}
