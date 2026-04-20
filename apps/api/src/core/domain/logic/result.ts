// src/core/domain/logic/result.ts

/**
 * Representa uma falha em uma operação (Violação de regra de negócio, erro de domínio, etc).
 */
export class Err<E, S> {
  readonly value: E;

  constructor(value: E) {
    this.value = value;
  }

  isErr(): this is Err<E, S> {
    return true;
  }

  isOk(): this is Ok<E, S> {
    return false;
  }
}

/**
 * Representa o sucesso em uma operação.
 */
export class Ok<E, S> {
  readonly value: S;

  constructor(value: S) {
    this.value = value;
  }

  isErr(): this is Err<E, S> {
    return false;
  }

  isOk(): this is Ok<E, S> {
    return true;
  }
}

/**
 * O tipo Result é uma união entre Err (Erro) e Ok (Sucesso).
 * O compilador do TypeScript usará as funções isErr() e isOk() como "Type Guards"
 * para descobrir qual é o formato correto de 'value' em tempo de compilação.
 */
export type Result<E, S> = Err<E, S> | Ok<E, S>;

/**
 * Função helper para instanciar um erro (Err) de forma limpa.
 * @param value O objeto, mensagem ou classe de erro.
 */
export const err = <E, S>(value: E): Err<E, S> => {
  return new Err<E, S>(value);
};

/**
 * Função helper para instanciar um sucesso (Ok) de forma limpa.
 * @param value O dado retornado em caso de sucesso (Entidade, DTO, etc).
 */
export const ok = <E, S>(value: S): Ok<E, S> => {
  return new Ok<E, S>(value);
};
