export abstract class TransactionManagerService {
  abstract execute<T>(work: () => Promise<T>): Promise<T>;
}
