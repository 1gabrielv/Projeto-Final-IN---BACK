
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Pajama
 * 
 */
export type Pajama = $Result.DefaultSelection<Prisma.$PajamaPayload>
/**
 * Model PajamaSize
 * 
 */
export type PajamaSize = $Result.DefaultSelection<Prisma.$PajamaSizePayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SalePajamas
 * 
 */
export type SalePajamas = $Result.DefaultSelection<Prisma.$SalePajamasPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pajama`: Exposes CRUD operations for the **Pajama** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pajamas
    * const pajamas = await prisma.pajama.findMany()
    * ```
    */
  get pajama(): Prisma.PajamaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pajamaSize`: Exposes CRUD operations for the **PajamaSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PajamaSizes
    * const pajamaSizes = await prisma.pajamaSize.findMany()
    * ```
    */
  get pajamaSize(): Prisma.PajamaSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salePajamas`: Exposes CRUD operations for the **SalePajamas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalePajamas
    * const salePajamas = await prisma.salePajamas.findMany()
    * ```
    */
  get salePajamas(): Prisma.SalePajamasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Feedback: 'Feedback',
    Pajama: 'Pajama',
    PajamaSize: 'PajamaSize',
    Sale: 'Sale',
    SalePajamas: 'SalePajamas',
    Address: 'Address'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "feedback" | "pajama" | "pajamaSize" | "sale" | "salePajamas" | "address"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Pajama: {
        payload: Prisma.$PajamaPayload<ExtArgs>
        fields: Prisma.PajamaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PajamaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PajamaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload>
          }
          findFirst: {
            args: Prisma.PajamaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PajamaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload>
          }
          findMany: {
            args: Prisma.PajamaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload>[]
          }
          create: {
            args: Prisma.PajamaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload>
          }
          createMany: {
            args: Prisma.PajamaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PajamaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload>[]
          }
          delete: {
            args: Prisma.PajamaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload>
          }
          update: {
            args: Prisma.PajamaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload>
          }
          deleteMany: {
            args: Prisma.PajamaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PajamaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PajamaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload>[]
          }
          upsert: {
            args: Prisma.PajamaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaPayload>
          }
          aggregate: {
            args: Prisma.PajamaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePajama>
          }
          groupBy: {
            args: Prisma.PajamaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PajamaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PajamaCountArgs<ExtArgs>
            result: $Utils.Optional<PajamaCountAggregateOutputType> | number
          }
        }
      }
      PajamaSize: {
        payload: Prisma.$PajamaSizePayload<ExtArgs>
        fields: Prisma.PajamaSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PajamaSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PajamaSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload>
          }
          findFirst: {
            args: Prisma.PajamaSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PajamaSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload>
          }
          findMany: {
            args: Prisma.PajamaSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload>[]
          }
          create: {
            args: Prisma.PajamaSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload>
          }
          createMany: {
            args: Prisma.PajamaSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PajamaSizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload>[]
          }
          delete: {
            args: Prisma.PajamaSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload>
          }
          update: {
            args: Prisma.PajamaSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload>
          }
          deleteMany: {
            args: Prisma.PajamaSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PajamaSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PajamaSizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload>[]
          }
          upsert: {
            args: Prisma.PajamaSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PajamaSizePayload>
          }
          aggregate: {
            args: Prisma.PajamaSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePajamaSize>
          }
          groupBy: {
            args: Prisma.PajamaSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PajamaSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PajamaSizeCountArgs<ExtArgs>
            result: $Utils.Optional<PajamaSizeCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SalePajamas: {
        payload: Prisma.$SalePajamasPayload<ExtArgs>
        fields: Prisma.SalePajamasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalePajamasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalePajamasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload>
          }
          findFirst: {
            args: Prisma.SalePajamasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalePajamasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload>
          }
          findMany: {
            args: Prisma.SalePajamasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload>[]
          }
          create: {
            args: Prisma.SalePajamasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload>
          }
          createMany: {
            args: Prisma.SalePajamasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalePajamasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload>[]
          }
          delete: {
            args: Prisma.SalePajamasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload>
          }
          update: {
            args: Prisma.SalePajamasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload>
          }
          deleteMany: {
            args: Prisma.SalePajamasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalePajamasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalePajamasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload>[]
          }
          upsert: {
            args: Prisma.SalePajamasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePajamasPayload>
          }
          aggregate: {
            args: Prisma.SalePajamasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalePajamas>
          }
          groupBy: {
            args: Prisma.SalePajamasGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalePajamasGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalePajamasCountArgs<ExtArgs>
            result: $Utils.Optional<SalePajamasCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    feedback?: FeedbackOmit
    pajama?: PajamaOmit
    pajamaSize?: PajamaSizeOmit
    sale?: SaleOmit
    salePajamas?: SalePajamasOmit
    address?: AddressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PajamaCountOutputType
   */

  export type PajamaCountOutputType = {
    sizes: number
    sales: number
  }

  export type PajamaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | PajamaCountOutputTypeCountSizesArgs
    sales?: boolean | PajamaCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * PajamaCountOutputType without action
   */
  export type PajamaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaCountOutputType
     */
    select?: PajamaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PajamaCountOutputType without action
   */
  export type PajamaCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PajamaSizeWhereInput
  }

  /**
   * PajamaCountOutputType without action
   */
  export type PajamaCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalePajamasWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    pajamas: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pajamas?: boolean | SaleCountOutputTypeCountPajamasArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountPajamasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalePajamasWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    sales: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | AddressCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    name: number
    description: number
    rating: number
    createdAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rating?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rating?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    name: string
    description: string
    rating: number
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "rating" | "createdAt", ExtArgs["result"]["feedback"]>

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      rating: number
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly name: FieldRef<"Feedback", 'String'>
    readonly description: FieldRef<"Feedback", 'String'>
    readonly rating: FieldRef<"Feedback", 'Float'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
  }


  /**
   * Model Pajama
   */

  export type AggregatePajama = {
    _count: PajamaCountAggregateOutputType | null
    _avg: PajamaAvgAggregateOutputType | null
    _sum: PajamaSumAggregateOutputType | null
    _min: PajamaMinAggregateOutputType | null
    _max: PajamaMaxAggregateOutputType | null
  }

  export type PajamaAvgAggregateOutputType = {
    price: number | null
    salePercent: number | null
  }

  export type PajamaSumAggregateOutputType = {
    price: number | null
    salePercent: number | null
  }

  export type PajamaMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    price: number | null
    season: string | null
    type: string | null
    gender: string | null
    favorite: boolean | null
    onSale: boolean | null
    salePercent: number | null
  }

  export type PajamaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    price: number | null
    season: string | null
    type: string | null
    gender: string | null
    favorite: boolean | null
    onSale: boolean | null
    salePercent: number | null
  }

  export type PajamaCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    price: number
    season: number
    type: number
    gender: number
    favorite: number
    onSale: number
    salePercent: number
    _all: number
  }


  export type PajamaAvgAggregateInputType = {
    price?: true
    salePercent?: true
  }

  export type PajamaSumAggregateInputType = {
    price?: true
    salePercent?: true
  }

  export type PajamaMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    price?: true
    season?: true
    type?: true
    gender?: true
    favorite?: true
    onSale?: true
    salePercent?: true
  }

  export type PajamaMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    price?: true
    season?: true
    type?: true
    gender?: true
    favorite?: true
    onSale?: true
    salePercent?: true
  }

  export type PajamaCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    price?: true
    season?: true
    type?: true
    gender?: true
    favorite?: true
    onSale?: true
    salePercent?: true
    _all?: true
  }

  export type PajamaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pajama to aggregate.
     */
    where?: PajamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pajamas to fetch.
     */
    orderBy?: PajamaOrderByWithRelationInput | PajamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PajamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pajamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pajamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pajamas
    **/
    _count?: true | PajamaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PajamaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PajamaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PajamaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PajamaMaxAggregateInputType
  }

  export type GetPajamaAggregateType<T extends PajamaAggregateArgs> = {
        [P in keyof T & keyof AggregatePajama]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePajama[P]>
      : GetScalarType<T[P], AggregatePajama[P]>
  }




  export type PajamaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PajamaWhereInput
    orderBy?: PajamaOrderByWithAggregationInput | PajamaOrderByWithAggregationInput[]
    by: PajamaScalarFieldEnum[] | PajamaScalarFieldEnum
    having?: PajamaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PajamaCountAggregateInputType | true
    _avg?: PajamaAvgAggregateInputType
    _sum?: PajamaSumAggregateInputType
    _min?: PajamaMinAggregateInputType
    _max?: PajamaMaxAggregateInputType
  }

  export type PajamaGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string
    price: number
    season: string
    type: string
    gender: string
    favorite: boolean
    onSale: boolean
    salePercent: number | null
    _count: PajamaCountAggregateOutputType | null
    _avg: PajamaAvgAggregateOutputType | null
    _sum: PajamaSumAggregateOutputType | null
    _min: PajamaMinAggregateOutputType | null
    _max: PajamaMaxAggregateOutputType | null
  }

  type GetPajamaGroupByPayload<T extends PajamaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PajamaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PajamaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PajamaGroupByOutputType[P]>
            : GetScalarType<T[P], PajamaGroupByOutputType[P]>
        }
      >
    >


  export type PajamaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    season?: boolean
    type?: boolean
    gender?: boolean
    favorite?: boolean
    onSale?: boolean
    salePercent?: boolean
    sizes?: boolean | Pajama$sizesArgs<ExtArgs>
    sales?: boolean | Pajama$salesArgs<ExtArgs>
    _count?: boolean | PajamaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pajama"]>

  export type PajamaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    season?: boolean
    type?: boolean
    gender?: boolean
    favorite?: boolean
    onSale?: boolean
    salePercent?: boolean
  }, ExtArgs["result"]["pajama"]>

  export type PajamaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    season?: boolean
    type?: boolean
    gender?: boolean
    favorite?: boolean
    onSale?: boolean
    salePercent?: boolean
  }, ExtArgs["result"]["pajama"]>

  export type PajamaSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    season?: boolean
    type?: boolean
    gender?: boolean
    favorite?: boolean
    onSale?: boolean
    salePercent?: boolean
  }

  export type PajamaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "price" | "season" | "type" | "gender" | "favorite" | "onSale" | "salePercent", ExtArgs["result"]["pajama"]>
  export type PajamaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | Pajama$sizesArgs<ExtArgs>
    sales?: boolean | Pajama$salesArgs<ExtArgs>
    _count?: boolean | PajamaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PajamaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PajamaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PajamaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pajama"
    objects: {
      sizes: Prisma.$PajamaSizePayload<ExtArgs>[]
      sales: Prisma.$SalePajamasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string
      price: number
      season: string
      type: string
      gender: string
      favorite: boolean
      onSale: boolean
      salePercent: number | null
    }, ExtArgs["result"]["pajama"]>
    composites: {}
  }

  type PajamaGetPayload<S extends boolean | null | undefined | PajamaDefaultArgs> = $Result.GetResult<Prisma.$PajamaPayload, S>

  type PajamaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PajamaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PajamaCountAggregateInputType | true
    }

  export interface PajamaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pajama'], meta: { name: 'Pajama' } }
    /**
     * Find zero or one Pajama that matches the filter.
     * @param {PajamaFindUniqueArgs} args - Arguments to find a Pajama
     * @example
     * // Get one Pajama
     * const pajama = await prisma.pajama.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PajamaFindUniqueArgs>(args: SelectSubset<T, PajamaFindUniqueArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pajama that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PajamaFindUniqueOrThrowArgs} args - Arguments to find a Pajama
     * @example
     * // Get one Pajama
     * const pajama = await prisma.pajama.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PajamaFindUniqueOrThrowArgs>(args: SelectSubset<T, PajamaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pajama that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaFindFirstArgs} args - Arguments to find a Pajama
     * @example
     * // Get one Pajama
     * const pajama = await prisma.pajama.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PajamaFindFirstArgs>(args?: SelectSubset<T, PajamaFindFirstArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pajama that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaFindFirstOrThrowArgs} args - Arguments to find a Pajama
     * @example
     * // Get one Pajama
     * const pajama = await prisma.pajama.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PajamaFindFirstOrThrowArgs>(args?: SelectSubset<T, PajamaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pajamas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pajamas
     * const pajamas = await prisma.pajama.findMany()
     * 
     * // Get first 10 Pajamas
     * const pajamas = await prisma.pajama.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pajamaWithIdOnly = await prisma.pajama.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PajamaFindManyArgs>(args?: SelectSubset<T, PajamaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pajama.
     * @param {PajamaCreateArgs} args - Arguments to create a Pajama.
     * @example
     * // Create one Pajama
     * const Pajama = await prisma.pajama.create({
     *   data: {
     *     // ... data to create a Pajama
     *   }
     * })
     * 
     */
    create<T extends PajamaCreateArgs>(args: SelectSubset<T, PajamaCreateArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pajamas.
     * @param {PajamaCreateManyArgs} args - Arguments to create many Pajamas.
     * @example
     * // Create many Pajamas
     * const pajama = await prisma.pajama.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PajamaCreateManyArgs>(args?: SelectSubset<T, PajamaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pajamas and returns the data saved in the database.
     * @param {PajamaCreateManyAndReturnArgs} args - Arguments to create many Pajamas.
     * @example
     * // Create many Pajamas
     * const pajama = await prisma.pajama.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pajamas and only return the `id`
     * const pajamaWithIdOnly = await prisma.pajama.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PajamaCreateManyAndReturnArgs>(args?: SelectSubset<T, PajamaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pajama.
     * @param {PajamaDeleteArgs} args - Arguments to delete one Pajama.
     * @example
     * // Delete one Pajama
     * const Pajama = await prisma.pajama.delete({
     *   where: {
     *     // ... filter to delete one Pajama
     *   }
     * })
     * 
     */
    delete<T extends PajamaDeleteArgs>(args: SelectSubset<T, PajamaDeleteArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pajama.
     * @param {PajamaUpdateArgs} args - Arguments to update one Pajama.
     * @example
     * // Update one Pajama
     * const pajama = await prisma.pajama.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PajamaUpdateArgs>(args: SelectSubset<T, PajamaUpdateArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pajamas.
     * @param {PajamaDeleteManyArgs} args - Arguments to filter Pajamas to delete.
     * @example
     * // Delete a few Pajamas
     * const { count } = await prisma.pajama.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PajamaDeleteManyArgs>(args?: SelectSubset<T, PajamaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pajamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pajamas
     * const pajama = await prisma.pajama.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PajamaUpdateManyArgs>(args: SelectSubset<T, PajamaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pajamas and returns the data updated in the database.
     * @param {PajamaUpdateManyAndReturnArgs} args - Arguments to update many Pajamas.
     * @example
     * // Update many Pajamas
     * const pajama = await prisma.pajama.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pajamas and only return the `id`
     * const pajamaWithIdOnly = await prisma.pajama.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PajamaUpdateManyAndReturnArgs>(args: SelectSubset<T, PajamaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pajama.
     * @param {PajamaUpsertArgs} args - Arguments to update or create a Pajama.
     * @example
     * // Update or create a Pajama
     * const pajama = await prisma.pajama.upsert({
     *   create: {
     *     // ... data to create a Pajama
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pajama we want to update
     *   }
     * })
     */
    upsert<T extends PajamaUpsertArgs>(args: SelectSubset<T, PajamaUpsertArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pajamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaCountArgs} args - Arguments to filter Pajamas to count.
     * @example
     * // Count the number of Pajamas
     * const count = await prisma.pajama.count({
     *   where: {
     *     // ... the filter for the Pajamas we want to count
     *   }
     * })
    **/
    count<T extends PajamaCountArgs>(
      args?: Subset<T, PajamaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PajamaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pajama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PajamaAggregateArgs>(args: Subset<T, PajamaAggregateArgs>): Prisma.PrismaPromise<GetPajamaAggregateType<T>>

    /**
     * Group by Pajama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PajamaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PajamaGroupByArgs['orderBy'] }
        : { orderBy?: PajamaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PajamaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPajamaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pajama model
   */
  readonly fields: PajamaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pajama.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PajamaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sizes<T extends Pajama$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Pajama$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Pajama$salesArgs<ExtArgs> = {}>(args?: Subset<T, Pajama$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pajama model
   */
  interface PajamaFieldRefs {
    readonly id: FieldRef<"Pajama", 'String'>
    readonly name: FieldRef<"Pajama", 'String'>
    readonly description: FieldRef<"Pajama", 'String'>
    readonly image: FieldRef<"Pajama", 'String'>
    readonly price: FieldRef<"Pajama", 'Float'>
    readonly season: FieldRef<"Pajama", 'String'>
    readonly type: FieldRef<"Pajama", 'String'>
    readonly gender: FieldRef<"Pajama", 'String'>
    readonly favorite: FieldRef<"Pajama", 'Boolean'>
    readonly onSale: FieldRef<"Pajama", 'Boolean'>
    readonly salePercent: FieldRef<"Pajama", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Pajama findUnique
   */
  export type PajamaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
    /**
     * Filter, which Pajama to fetch.
     */
    where: PajamaWhereUniqueInput
  }

  /**
   * Pajama findUniqueOrThrow
   */
  export type PajamaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
    /**
     * Filter, which Pajama to fetch.
     */
    where: PajamaWhereUniqueInput
  }

  /**
   * Pajama findFirst
   */
  export type PajamaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
    /**
     * Filter, which Pajama to fetch.
     */
    where?: PajamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pajamas to fetch.
     */
    orderBy?: PajamaOrderByWithRelationInput | PajamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pajamas.
     */
    cursor?: PajamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pajamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pajamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pajamas.
     */
    distinct?: PajamaScalarFieldEnum | PajamaScalarFieldEnum[]
  }

  /**
   * Pajama findFirstOrThrow
   */
  export type PajamaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
    /**
     * Filter, which Pajama to fetch.
     */
    where?: PajamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pajamas to fetch.
     */
    orderBy?: PajamaOrderByWithRelationInput | PajamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pajamas.
     */
    cursor?: PajamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pajamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pajamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pajamas.
     */
    distinct?: PajamaScalarFieldEnum | PajamaScalarFieldEnum[]
  }

  /**
   * Pajama findMany
   */
  export type PajamaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
    /**
     * Filter, which Pajamas to fetch.
     */
    where?: PajamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pajamas to fetch.
     */
    orderBy?: PajamaOrderByWithRelationInput | PajamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pajamas.
     */
    cursor?: PajamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pajamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pajamas.
     */
    skip?: number
    distinct?: PajamaScalarFieldEnum | PajamaScalarFieldEnum[]
  }

  /**
   * Pajama create
   */
  export type PajamaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pajama.
     */
    data: XOR<PajamaCreateInput, PajamaUncheckedCreateInput>
  }

  /**
   * Pajama createMany
   */
  export type PajamaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pajamas.
     */
    data: PajamaCreateManyInput | PajamaCreateManyInput[]
  }

  /**
   * Pajama createManyAndReturn
   */
  export type PajamaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * The data used to create many Pajamas.
     */
    data: PajamaCreateManyInput | PajamaCreateManyInput[]
  }

  /**
   * Pajama update
   */
  export type PajamaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pajama.
     */
    data: XOR<PajamaUpdateInput, PajamaUncheckedUpdateInput>
    /**
     * Choose, which Pajama to update.
     */
    where: PajamaWhereUniqueInput
  }

  /**
   * Pajama updateMany
   */
  export type PajamaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pajamas.
     */
    data: XOR<PajamaUpdateManyMutationInput, PajamaUncheckedUpdateManyInput>
    /**
     * Filter which Pajamas to update
     */
    where?: PajamaWhereInput
    /**
     * Limit how many Pajamas to update.
     */
    limit?: number
  }

  /**
   * Pajama updateManyAndReturn
   */
  export type PajamaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * The data used to update Pajamas.
     */
    data: XOR<PajamaUpdateManyMutationInput, PajamaUncheckedUpdateManyInput>
    /**
     * Filter which Pajamas to update
     */
    where?: PajamaWhereInput
    /**
     * Limit how many Pajamas to update.
     */
    limit?: number
  }

  /**
   * Pajama upsert
   */
  export type PajamaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pajama to update in case it exists.
     */
    where: PajamaWhereUniqueInput
    /**
     * In case the Pajama found by the `where` argument doesn't exist, create a new Pajama with this data.
     */
    create: XOR<PajamaCreateInput, PajamaUncheckedCreateInput>
    /**
     * In case the Pajama was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PajamaUpdateInput, PajamaUncheckedUpdateInput>
  }

  /**
   * Pajama delete
   */
  export type PajamaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
    /**
     * Filter which Pajama to delete.
     */
    where: PajamaWhereUniqueInput
  }

  /**
   * Pajama deleteMany
   */
  export type PajamaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pajamas to delete
     */
    where?: PajamaWhereInput
    /**
     * Limit how many Pajamas to delete.
     */
    limit?: number
  }

  /**
   * Pajama.sizes
   */
  export type Pajama$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    where?: PajamaSizeWhereInput
    orderBy?: PajamaSizeOrderByWithRelationInput | PajamaSizeOrderByWithRelationInput[]
    cursor?: PajamaSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PajamaSizeScalarFieldEnum | PajamaSizeScalarFieldEnum[]
  }

  /**
   * Pajama.sales
   */
  export type Pajama$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    where?: SalePajamasWhereInput
    orderBy?: SalePajamasOrderByWithRelationInput | SalePajamasOrderByWithRelationInput[]
    cursor?: SalePajamasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalePajamasScalarFieldEnum | SalePajamasScalarFieldEnum[]
  }

  /**
   * Pajama without action
   */
  export type PajamaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pajama
     */
    select?: PajamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pajama
     */
    omit?: PajamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaInclude<ExtArgs> | null
  }


  /**
   * Model PajamaSize
   */

  export type AggregatePajamaSize = {
    _count: PajamaSizeCountAggregateOutputType | null
    _avg: PajamaSizeAvgAggregateOutputType | null
    _sum: PajamaSizeSumAggregateOutputType | null
    _min: PajamaSizeMinAggregateOutputType | null
    _max: PajamaSizeMaxAggregateOutputType | null
  }

  export type PajamaSizeAvgAggregateOutputType = {
    stockQuantity: number | null
  }

  export type PajamaSizeSumAggregateOutputType = {
    stockQuantity: number | null
  }

  export type PajamaSizeMinAggregateOutputType = {
    id: string | null
    stockQuantity: number | null
    size: string | null
    pajamaId: string | null
  }

  export type PajamaSizeMaxAggregateOutputType = {
    id: string | null
    stockQuantity: number | null
    size: string | null
    pajamaId: string | null
  }

  export type PajamaSizeCountAggregateOutputType = {
    id: number
    stockQuantity: number
    size: number
    pajamaId: number
    _all: number
  }


  export type PajamaSizeAvgAggregateInputType = {
    stockQuantity?: true
  }

  export type PajamaSizeSumAggregateInputType = {
    stockQuantity?: true
  }

  export type PajamaSizeMinAggregateInputType = {
    id?: true
    stockQuantity?: true
    size?: true
    pajamaId?: true
  }

  export type PajamaSizeMaxAggregateInputType = {
    id?: true
    stockQuantity?: true
    size?: true
    pajamaId?: true
  }

  export type PajamaSizeCountAggregateInputType = {
    id?: true
    stockQuantity?: true
    size?: true
    pajamaId?: true
    _all?: true
  }

  export type PajamaSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PajamaSize to aggregate.
     */
    where?: PajamaSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PajamaSizes to fetch.
     */
    orderBy?: PajamaSizeOrderByWithRelationInput | PajamaSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PajamaSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PajamaSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PajamaSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PajamaSizes
    **/
    _count?: true | PajamaSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PajamaSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PajamaSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PajamaSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PajamaSizeMaxAggregateInputType
  }

  export type GetPajamaSizeAggregateType<T extends PajamaSizeAggregateArgs> = {
        [P in keyof T & keyof AggregatePajamaSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePajamaSize[P]>
      : GetScalarType<T[P], AggregatePajamaSize[P]>
  }




  export type PajamaSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PajamaSizeWhereInput
    orderBy?: PajamaSizeOrderByWithAggregationInput | PajamaSizeOrderByWithAggregationInput[]
    by: PajamaSizeScalarFieldEnum[] | PajamaSizeScalarFieldEnum
    having?: PajamaSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PajamaSizeCountAggregateInputType | true
    _avg?: PajamaSizeAvgAggregateInputType
    _sum?: PajamaSizeSumAggregateInputType
    _min?: PajamaSizeMinAggregateInputType
    _max?: PajamaSizeMaxAggregateInputType
  }

  export type PajamaSizeGroupByOutputType = {
    id: string
    stockQuantity: number
    size: string
    pajamaId: string
    _count: PajamaSizeCountAggregateOutputType | null
    _avg: PajamaSizeAvgAggregateOutputType | null
    _sum: PajamaSizeSumAggregateOutputType | null
    _min: PajamaSizeMinAggregateOutputType | null
    _max: PajamaSizeMaxAggregateOutputType | null
  }

  type GetPajamaSizeGroupByPayload<T extends PajamaSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PajamaSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PajamaSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PajamaSizeGroupByOutputType[P]>
            : GetScalarType<T[P], PajamaSizeGroupByOutputType[P]>
        }
      >
    >


  export type PajamaSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockQuantity?: boolean
    size?: boolean
    pajamaId?: boolean
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pajamaSize"]>

  export type PajamaSizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockQuantity?: boolean
    size?: boolean
    pajamaId?: boolean
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pajamaSize"]>

  export type PajamaSizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockQuantity?: boolean
    size?: boolean
    pajamaId?: boolean
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pajamaSize"]>

  export type PajamaSizeSelectScalar = {
    id?: boolean
    stockQuantity?: boolean
    size?: boolean
    pajamaId?: boolean
  }

  export type PajamaSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stockQuantity" | "size" | "pajamaId", ExtArgs["result"]["pajamaSize"]>
  export type PajamaSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }
  export type PajamaSizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }
  export type PajamaSizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }

  export type $PajamaSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PajamaSize"
    objects: {
      pajama: Prisma.$PajamaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stockQuantity: number
      size: string
      pajamaId: string
    }, ExtArgs["result"]["pajamaSize"]>
    composites: {}
  }

  type PajamaSizeGetPayload<S extends boolean | null | undefined | PajamaSizeDefaultArgs> = $Result.GetResult<Prisma.$PajamaSizePayload, S>

  type PajamaSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PajamaSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PajamaSizeCountAggregateInputType | true
    }

  export interface PajamaSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PajamaSize'], meta: { name: 'PajamaSize' } }
    /**
     * Find zero or one PajamaSize that matches the filter.
     * @param {PajamaSizeFindUniqueArgs} args - Arguments to find a PajamaSize
     * @example
     * // Get one PajamaSize
     * const pajamaSize = await prisma.pajamaSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PajamaSizeFindUniqueArgs>(args: SelectSubset<T, PajamaSizeFindUniqueArgs<ExtArgs>>): Prisma__PajamaSizeClient<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PajamaSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PajamaSizeFindUniqueOrThrowArgs} args - Arguments to find a PajamaSize
     * @example
     * // Get one PajamaSize
     * const pajamaSize = await prisma.pajamaSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PajamaSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, PajamaSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PajamaSizeClient<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PajamaSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaSizeFindFirstArgs} args - Arguments to find a PajamaSize
     * @example
     * // Get one PajamaSize
     * const pajamaSize = await prisma.pajamaSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PajamaSizeFindFirstArgs>(args?: SelectSubset<T, PajamaSizeFindFirstArgs<ExtArgs>>): Prisma__PajamaSizeClient<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PajamaSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaSizeFindFirstOrThrowArgs} args - Arguments to find a PajamaSize
     * @example
     * // Get one PajamaSize
     * const pajamaSize = await prisma.pajamaSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PajamaSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, PajamaSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PajamaSizeClient<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PajamaSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PajamaSizes
     * const pajamaSizes = await prisma.pajamaSize.findMany()
     * 
     * // Get first 10 PajamaSizes
     * const pajamaSizes = await prisma.pajamaSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pajamaSizeWithIdOnly = await prisma.pajamaSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PajamaSizeFindManyArgs>(args?: SelectSubset<T, PajamaSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PajamaSize.
     * @param {PajamaSizeCreateArgs} args - Arguments to create a PajamaSize.
     * @example
     * // Create one PajamaSize
     * const PajamaSize = await prisma.pajamaSize.create({
     *   data: {
     *     // ... data to create a PajamaSize
     *   }
     * })
     * 
     */
    create<T extends PajamaSizeCreateArgs>(args: SelectSubset<T, PajamaSizeCreateArgs<ExtArgs>>): Prisma__PajamaSizeClient<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PajamaSizes.
     * @param {PajamaSizeCreateManyArgs} args - Arguments to create many PajamaSizes.
     * @example
     * // Create many PajamaSizes
     * const pajamaSize = await prisma.pajamaSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PajamaSizeCreateManyArgs>(args?: SelectSubset<T, PajamaSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PajamaSizes and returns the data saved in the database.
     * @param {PajamaSizeCreateManyAndReturnArgs} args - Arguments to create many PajamaSizes.
     * @example
     * // Create many PajamaSizes
     * const pajamaSize = await prisma.pajamaSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PajamaSizes and only return the `id`
     * const pajamaSizeWithIdOnly = await prisma.pajamaSize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PajamaSizeCreateManyAndReturnArgs>(args?: SelectSubset<T, PajamaSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PajamaSize.
     * @param {PajamaSizeDeleteArgs} args - Arguments to delete one PajamaSize.
     * @example
     * // Delete one PajamaSize
     * const PajamaSize = await prisma.pajamaSize.delete({
     *   where: {
     *     // ... filter to delete one PajamaSize
     *   }
     * })
     * 
     */
    delete<T extends PajamaSizeDeleteArgs>(args: SelectSubset<T, PajamaSizeDeleteArgs<ExtArgs>>): Prisma__PajamaSizeClient<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PajamaSize.
     * @param {PajamaSizeUpdateArgs} args - Arguments to update one PajamaSize.
     * @example
     * // Update one PajamaSize
     * const pajamaSize = await prisma.pajamaSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PajamaSizeUpdateArgs>(args: SelectSubset<T, PajamaSizeUpdateArgs<ExtArgs>>): Prisma__PajamaSizeClient<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PajamaSizes.
     * @param {PajamaSizeDeleteManyArgs} args - Arguments to filter PajamaSizes to delete.
     * @example
     * // Delete a few PajamaSizes
     * const { count } = await prisma.pajamaSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PajamaSizeDeleteManyArgs>(args?: SelectSubset<T, PajamaSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PajamaSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PajamaSizes
     * const pajamaSize = await prisma.pajamaSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PajamaSizeUpdateManyArgs>(args: SelectSubset<T, PajamaSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PajamaSizes and returns the data updated in the database.
     * @param {PajamaSizeUpdateManyAndReturnArgs} args - Arguments to update many PajamaSizes.
     * @example
     * // Update many PajamaSizes
     * const pajamaSize = await prisma.pajamaSize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PajamaSizes and only return the `id`
     * const pajamaSizeWithIdOnly = await prisma.pajamaSize.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PajamaSizeUpdateManyAndReturnArgs>(args: SelectSubset<T, PajamaSizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PajamaSize.
     * @param {PajamaSizeUpsertArgs} args - Arguments to update or create a PajamaSize.
     * @example
     * // Update or create a PajamaSize
     * const pajamaSize = await prisma.pajamaSize.upsert({
     *   create: {
     *     // ... data to create a PajamaSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PajamaSize we want to update
     *   }
     * })
     */
    upsert<T extends PajamaSizeUpsertArgs>(args: SelectSubset<T, PajamaSizeUpsertArgs<ExtArgs>>): Prisma__PajamaSizeClient<$Result.GetResult<Prisma.$PajamaSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PajamaSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaSizeCountArgs} args - Arguments to filter PajamaSizes to count.
     * @example
     * // Count the number of PajamaSizes
     * const count = await prisma.pajamaSize.count({
     *   where: {
     *     // ... the filter for the PajamaSizes we want to count
     *   }
     * })
    **/
    count<T extends PajamaSizeCountArgs>(
      args?: Subset<T, PajamaSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PajamaSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PajamaSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PajamaSizeAggregateArgs>(args: Subset<T, PajamaSizeAggregateArgs>): Prisma.PrismaPromise<GetPajamaSizeAggregateType<T>>

    /**
     * Group by PajamaSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PajamaSizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PajamaSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PajamaSizeGroupByArgs['orderBy'] }
        : { orderBy?: PajamaSizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PajamaSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPajamaSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PajamaSize model
   */
  readonly fields: PajamaSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PajamaSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PajamaSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pajama<T extends PajamaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PajamaDefaultArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PajamaSize model
   */
  interface PajamaSizeFieldRefs {
    readonly id: FieldRef<"PajamaSize", 'String'>
    readonly stockQuantity: FieldRef<"PajamaSize", 'Int'>
    readonly size: FieldRef<"PajamaSize", 'String'>
    readonly pajamaId: FieldRef<"PajamaSize", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PajamaSize findUnique
   */
  export type PajamaSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PajamaSize to fetch.
     */
    where: PajamaSizeWhereUniqueInput
  }

  /**
   * PajamaSize findUniqueOrThrow
   */
  export type PajamaSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PajamaSize to fetch.
     */
    where: PajamaSizeWhereUniqueInput
  }

  /**
   * PajamaSize findFirst
   */
  export type PajamaSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PajamaSize to fetch.
     */
    where?: PajamaSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PajamaSizes to fetch.
     */
    orderBy?: PajamaSizeOrderByWithRelationInput | PajamaSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PajamaSizes.
     */
    cursor?: PajamaSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PajamaSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PajamaSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PajamaSizes.
     */
    distinct?: PajamaSizeScalarFieldEnum | PajamaSizeScalarFieldEnum[]
  }

  /**
   * PajamaSize findFirstOrThrow
   */
  export type PajamaSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PajamaSize to fetch.
     */
    where?: PajamaSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PajamaSizes to fetch.
     */
    orderBy?: PajamaSizeOrderByWithRelationInput | PajamaSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PajamaSizes.
     */
    cursor?: PajamaSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PajamaSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PajamaSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PajamaSizes.
     */
    distinct?: PajamaSizeScalarFieldEnum | PajamaSizeScalarFieldEnum[]
  }

  /**
   * PajamaSize findMany
   */
  export type PajamaSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    /**
     * Filter, which PajamaSizes to fetch.
     */
    where?: PajamaSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PajamaSizes to fetch.
     */
    orderBy?: PajamaSizeOrderByWithRelationInput | PajamaSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PajamaSizes.
     */
    cursor?: PajamaSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PajamaSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PajamaSizes.
     */
    skip?: number
    distinct?: PajamaSizeScalarFieldEnum | PajamaSizeScalarFieldEnum[]
  }

  /**
   * PajamaSize create
   */
  export type PajamaSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a PajamaSize.
     */
    data: XOR<PajamaSizeCreateInput, PajamaSizeUncheckedCreateInput>
  }

  /**
   * PajamaSize createMany
   */
  export type PajamaSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PajamaSizes.
     */
    data: PajamaSizeCreateManyInput | PajamaSizeCreateManyInput[]
  }

  /**
   * PajamaSize createManyAndReturn
   */
  export type PajamaSizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * The data used to create many PajamaSizes.
     */
    data: PajamaSizeCreateManyInput | PajamaSizeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PajamaSize update
   */
  export type PajamaSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a PajamaSize.
     */
    data: XOR<PajamaSizeUpdateInput, PajamaSizeUncheckedUpdateInput>
    /**
     * Choose, which PajamaSize to update.
     */
    where: PajamaSizeWhereUniqueInput
  }

  /**
   * PajamaSize updateMany
   */
  export type PajamaSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PajamaSizes.
     */
    data: XOR<PajamaSizeUpdateManyMutationInput, PajamaSizeUncheckedUpdateManyInput>
    /**
     * Filter which PajamaSizes to update
     */
    where?: PajamaSizeWhereInput
    /**
     * Limit how many PajamaSizes to update.
     */
    limit?: number
  }

  /**
   * PajamaSize updateManyAndReturn
   */
  export type PajamaSizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * The data used to update PajamaSizes.
     */
    data: XOR<PajamaSizeUpdateManyMutationInput, PajamaSizeUncheckedUpdateManyInput>
    /**
     * Filter which PajamaSizes to update
     */
    where?: PajamaSizeWhereInput
    /**
     * Limit how many PajamaSizes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PajamaSize upsert
   */
  export type PajamaSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the PajamaSize to update in case it exists.
     */
    where: PajamaSizeWhereUniqueInput
    /**
     * In case the PajamaSize found by the `where` argument doesn't exist, create a new PajamaSize with this data.
     */
    create: XOR<PajamaSizeCreateInput, PajamaSizeUncheckedCreateInput>
    /**
     * In case the PajamaSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PajamaSizeUpdateInput, PajamaSizeUncheckedUpdateInput>
  }

  /**
   * PajamaSize delete
   */
  export type PajamaSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
    /**
     * Filter which PajamaSize to delete.
     */
    where: PajamaSizeWhereUniqueInput
  }

  /**
   * PajamaSize deleteMany
   */
  export type PajamaSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PajamaSizes to delete
     */
    where?: PajamaSizeWhereInput
    /**
     * Limit how many PajamaSizes to delete.
     */
    limit?: number
  }

  /**
   * PajamaSize without action
   */
  export type PajamaSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PajamaSize
     */
    select?: PajamaSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PajamaSize
     */
    omit?: PajamaSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PajamaSizeInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    price: number | null
    installments: number | null
  }

  export type SaleSumAggregateOutputType = {
    price: number | null
    installments: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    buyerName: string | null
    cpf: string | null
    price: number | null
    paymentMethod: string | null
    installments: number | null
    cardNumber: string | null
    createdAt: Date | null
    addressId: string | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    buyerName: string | null
    cpf: string | null
    price: number | null
    paymentMethod: string | null
    installments: number | null
    cardNumber: string | null
    createdAt: Date | null
    addressId: string | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    buyerName: number
    cpf: number
    price: number
    paymentMethod: number
    installments: number
    cardNumber: number
    createdAt: number
    addressId: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    price?: true
    installments?: true
  }

  export type SaleSumAggregateInputType = {
    price?: true
    installments?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    buyerName?: true
    cpf?: true
    price?: true
    paymentMethod?: true
    installments?: true
    cardNumber?: true
    createdAt?: true
    addressId?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    buyerName?: true
    cpf?: true
    price?: true
    paymentMethod?: true
    installments?: true
    cardNumber?: true
    createdAt?: true
    addressId?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    buyerName?: true
    cpf?: true
    price?: true
    paymentMethod?: true
    installments?: true
    cardNumber?: true
    createdAt?: true
    addressId?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    buyerName: string
    cpf: string
    price: number
    paymentMethod: string
    installments: number
    cardNumber: string | null
    createdAt: Date
    addressId: string
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerName?: boolean
    cpf?: boolean
    price?: boolean
    paymentMethod?: boolean
    installments?: boolean
    cardNumber?: boolean
    createdAt?: boolean
    addressId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    pajamas?: boolean | Sale$pajamasArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerName?: boolean
    cpf?: boolean
    price?: boolean
    paymentMethod?: boolean
    installments?: boolean
    cardNumber?: boolean
    createdAt?: boolean
    addressId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerName?: boolean
    cpf?: boolean
    price?: boolean
    paymentMethod?: boolean
    installments?: boolean
    cardNumber?: boolean
    createdAt?: boolean
    addressId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    buyerName?: boolean
    cpf?: boolean
    price?: boolean
    paymentMethod?: boolean
    installments?: boolean
    cardNumber?: boolean
    createdAt?: boolean
    addressId?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "buyerName" | "cpf" | "price" | "paymentMethod" | "installments" | "cardNumber" | "createdAt" | "addressId", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    pajamas?: boolean | Sale$pajamasArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      pajamas: Prisma.$SalePajamasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      buyerName: string
      cpf: string
      price: number
      paymentMethod: string
      installments: number
      cardNumber: string | null
      createdAt: Date
      addressId: string
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pajamas<T extends Sale$pajamasArgs<ExtArgs> = {}>(args?: Subset<T, Sale$pajamasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly buyerName: FieldRef<"Sale", 'String'>
    readonly cpf: FieldRef<"Sale", 'String'>
    readonly price: FieldRef<"Sale", 'Float'>
    readonly paymentMethod: FieldRef<"Sale", 'String'>
    readonly installments: FieldRef<"Sale", 'Int'>
    readonly cardNumber: FieldRef<"Sale", 'String'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly addressId: FieldRef<"Sale", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.pajamas
   */
  export type Sale$pajamasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    where?: SalePajamasWhereInput
    orderBy?: SalePajamasOrderByWithRelationInput | SalePajamasOrderByWithRelationInput[]
    cursor?: SalePajamasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalePajamasScalarFieldEnum | SalePajamasScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SalePajamas
   */

  export type AggregateSalePajamas = {
    _count: SalePajamasCountAggregateOutputType | null
    _avg: SalePajamasAvgAggregateOutputType | null
    _sum: SalePajamasSumAggregateOutputType | null
    _min: SalePajamasMinAggregateOutputType | null
    _max: SalePajamasMaxAggregateOutputType | null
  }

  export type SalePajamasAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type SalePajamasSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type SalePajamasMinAggregateOutputType = {
    quantity: number | null
    price: number | null
    saleId: string | null
    pajamaId: string | null
  }

  export type SalePajamasMaxAggregateOutputType = {
    quantity: number | null
    price: number | null
    saleId: string | null
    pajamaId: string | null
  }

  export type SalePajamasCountAggregateOutputType = {
    quantity: number
    price: number
    saleId: number
    pajamaId: number
    _all: number
  }


  export type SalePajamasAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type SalePajamasSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type SalePajamasMinAggregateInputType = {
    quantity?: true
    price?: true
    saleId?: true
    pajamaId?: true
  }

  export type SalePajamasMaxAggregateInputType = {
    quantity?: true
    price?: true
    saleId?: true
    pajamaId?: true
  }

  export type SalePajamasCountAggregateInputType = {
    quantity?: true
    price?: true
    saleId?: true
    pajamaId?: true
    _all?: true
  }

  export type SalePajamasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalePajamas to aggregate.
     */
    where?: SalePajamasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePajamas to fetch.
     */
    orderBy?: SalePajamasOrderByWithRelationInput | SalePajamasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalePajamasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePajamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePajamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalePajamas
    **/
    _count?: true | SalePajamasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalePajamasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalePajamasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalePajamasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalePajamasMaxAggregateInputType
  }

  export type GetSalePajamasAggregateType<T extends SalePajamasAggregateArgs> = {
        [P in keyof T & keyof AggregateSalePajamas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalePajamas[P]>
      : GetScalarType<T[P], AggregateSalePajamas[P]>
  }




  export type SalePajamasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalePajamasWhereInput
    orderBy?: SalePajamasOrderByWithAggregationInput | SalePajamasOrderByWithAggregationInput[]
    by: SalePajamasScalarFieldEnum[] | SalePajamasScalarFieldEnum
    having?: SalePajamasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalePajamasCountAggregateInputType | true
    _avg?: SalePajamasAvgAggregateInputType
    _sum?: SalePajamasSumAggregateInputType
    _min?: SalePajamasMinAggregateInputType
    _max?: SalePajamasMaxAggregateInputType
  }

  export type SalePajamasGroupByOutputType = {
    quantity: number
    price: number
    saleId: string
    pajamaId: string
    _count: SalePajamasCountAggregateOutputType | null
    _avg: SalePajamasAvgAggregateOutputType | null
    _sum: SalePajamasSumAggregateOutputType | null
    _min: SalePajamasMinAggregateOutputType | null
    _max: SalePajamasMaxAggregateOutputType | null
  }

  type GetSalePajamasGroupByPayload<T extends SalePajamasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalePajamasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalePajamasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalePajamasGroupByOutputType[P]>
            : GetScalarType<T[P], SalePajamasGroupByOutputType[P]>
        }
      >
    >


  export type SalePajamasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quantity?: boolean
    price?: boolean
    saleId?: boolean
    pajamaId?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salePajamas"]>

  export type SalePajamasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quantity?: boolean
    price?: boolean
    saleId?: boolean
    pajamaId?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salePajamas"]>

  export type SalePajamasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quantity?: boolean
    price?: boolean
    saleId?: boolean
    pajamaId?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salePajamas"]>

  export type SalePajamasSelectScalar = {
    quantity?: boolean
    price?: boolean
    saleId?: boolean
    pajamaId?: boolean
  }

  export type SalePajamasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"quantity" | "price" | "saleId" | "pajamaId", ExtArgs["result"]["salePajamas"]>
  export type SalePajamasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }
  export type SalePajamasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }
  export type SalePajamasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    pajama?: boolean | PajamaDefaultArgs<ExtArgs>
  }

  export type $SalePajamasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalePajamas"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>
      pajama: Prisma.$PajamaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      quantity: number
      price: number
      saleId: string
      pajamaId: string
    }, ExtArgs["result"]["salePajamas"]>
    composites: {}
  }

  type SalePajamasGetPayload<S extends boolean | null | undefined | SalePajamasDefaultArgs> = $Result.GetResult<Prisma.$SalePajamasPayload, S>

  type SalePajamasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalePajamasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalePajamasCountAggregateInputType | true
    }

  export interface SalePajamasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalePajamas'], meta: { name: 'SalePajamas' } }
    /**
     * Find zero or one SalePajamas that matches the filter.
     * @param {SalePajamasFindUniqueArgs} args - Arguments to find a SalePajamas
     * @example
     * // Get one SalePajamas
     * const salePajamas = await prisma.salePajamas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalePajamasFindUniqueArgs>(args: SelectSubset<T, SalePajamasFindUniqueArgs<ExtArgs>>): Prisma__SalePajamasClient<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalePajamas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalePajamasFindUniqueOrThrowArgs} args - Arguments to find a SalePajamas
     * @example
     * // Get one SalePajamas
     * const salePajamas = await prisma.salePajamas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalePajamasFindUniqueOrThrowArgs>(args: SelectSubset<T, SalePajamasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalePajamasClient<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalePajamas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePajamasFindFirstArgs} args - Arguments to find a SalePajamas
     * @example
     * // Get one SalePajamas
     * const salePajamas = await prisma.salePajamas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalePajamasFindFirstArgs>(args?: SelectSubset<T, SalePajamasFindFirstArgs<ExtArgs>>): Prisma__SalePajamasClient<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalePajamas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePajamasFindFirstOrThrowArgs} args - Arguments to find a SalePajamas
     * @example
     * // Get one SalePajamas
     * const salePajamas = await prisma.salePajamas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalePajamasFindFirstOrThrowArgs>(args?: SelectSubset<T, SalePajamasFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalePajamasClient<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalePajamas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePajamasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalePajamas
     * const salePajamas = await prisma.salePajamas.findMany()
     * 
     * // Get first 10 SalePajamas
     * const salePajamas = await prisma.salePajamas.findMany({ take: 10 })
     * 
     * // Only select the `quantity`
     * const salePajamasWithQuantityOnly = await prisma.salePajamas.findMany({ select: { quantity: true } })
     * 
     */
    findMany<T extends SalePajamasFindManyArgs>(args?: SelectSubset<T, SalePajamasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalePajamas.
     * @param {SalePajamasCreateArgs} args - Arguments to create a SalePajamas.
     * @example
     * // Create one SalePajamas
     * const SalePajamas = await prisma.salePajamas.create({
     *   data: {
     *     // ... data to create a SalePajamas
     *   }
     * })
     * 
     */
    create<T extends SalePajamasCreateArgs>(args: SelectSubset<T, SalePajamasCreateArgs<ExtArgs>>): Prisma__SalePajamasClient<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalePajamas.
     * @param {SalePajamasCreateManyArgs} args - Arguments to create many SalePajamas.
     * @example
     * // Create many SalePajamas
     * const salePajamas = await prisma.salePajamas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalePajamasCreateManyArgs>(args?: SelectSubset<T, SalePajamasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalePajamas and returns the data saved in the database.
     * @param {SalePajamasCreateManyAndReturnArgs} args - Arguments to create many SalePajamas.
     * @example
     * // Create many SalePajamas
     * const salePajamas = await prisma.salePajamas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalePajamas and only return the `quantity`
     * const salePajamasWithQuantityOnly = await prisma.salePajamas.createManyAndReturn({
     *   select: { quantity: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalePajamasCreateManyAndReturnArgs>(args?: SelectSubset<T, SalePajamasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalePajamas.
     * @param {SalePajamasDeleteArgs} args - Arguments to delete one SalePajamas.
     * @example
     * // Delete one SalePajamas
     * const SalePajamas = await prisma.salePajamas.delete({
     *   where: {
     *     // ... filter to delete one SalePajamas
     *   }
     * })
     * 
     */
    delete<T extends SalePajamasDeleteArgs>(args: SelectSubset<T, SalePajamasDeleteArgs<ExtArgs>>): Prisma__SalePajamasClient<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalePajamas.
     * @param {SalePajamasUpdateArgs} args - Arguments to update one SalePajamas.
     * @example
     * // Update one SalePajamas
     * const salePajamas = await prisma.salePajamas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalePajamasUpdateArgs>(args: SelectSubset<T, SalePajamasUpdateArgs<ExtArgs>>): Prisma__SalePajamasClient<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalePajamas.
     * @param {SalePajamasDeleteManyArgs} args - Arguments to filter SalePajamas to delete.
     * @example
     * // Delete a few SalePajamas
     * const { count } = await prisma.salePajamas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalePajamasDeleteManyArgs>(args?: SelectSubset<T, SalePajamasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalePajamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePajamasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalePajamas
     * const salePajamas = await prisma.salePajamas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalePajamasUpdateManyArgs>(args: SelectSubset<T, SalePajamasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalePajamas and returns the data updated in the database.
     * @param {SalePajamasUpdateManyAndReturnArgs} args - Arguments to update many SalePajamas.
     * @example
     * // Update many SalePajamas
     * const salePajamas = await prisma.salePajamas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalePajamas and only return the `quantity`
     * const salePajamasWithQuantityOnly = await prisma.salePajamas.updateManyAndReturn({
     *   select: { quantity: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalePajamasUpdateManyAndReturnArgs>(args: SelectSubset<T, SalePajamasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalePajamas.
     * @param {SalePajamasUpsertArgs} args - Arguments to update or create a SalePajamas.
     * @example
     * // Update or create a SalePajamas
     * const salePajamas = await prisma.salePajamas.upsert({
     *   create: {
     *     // ... data to create a SalePajamas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalePajamas we want to update
     *   }
     * })
     */
    upsert<T extends SalePajamasUpsertArgs>(args: SelectSubset<T, SalePajamasUpsertArgs<ExtArgs>>): Prisma__SalePajamasClient<$Result.GetResult<Prisma.$SalePajamasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalePajamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePajamasCountArgs} args - Arguments to filter SalePajamas to count.
     * @example
     * // Count the number of SalePajamas
     * const count = await prisma.salePajamas.count({
     *   where: {
     *     // ... the filter for the SalePajamas we want to count
     *   }
     * })
    **/
    count<T extends SalePajamasCountArgs>(
      args?: Subset<T, SalePajamasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalePajamasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalePajamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePajamasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalePajamasAggregateArgs>(args: Subset<T, SalePajamasAggregateArgs>): Prisma.PrismaPromise<GetSalePajamasAggregateType<T>>

    /**
     * Group by SalePajamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePajamasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalePajamasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalePajamasGroupByArgs['orderBy'] }
        : { orderBy?: SalePajamasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalePajamasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalePajamasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalePajamas model
   */
  readonly fields: SalePajamasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalePajamas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalePajamasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pajama<T extends PajamaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PajamaDefaultArgs<ExtArgs>>): Prisma__PajamaClient<$Result.GetResult<Prisma.$PajamaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalePajamas model
   */
  interface SalePajamasFieldRefs {
    readonly quantity: FieldRef<"SalePajamas", 'Int'>
    readonly price: FieldRef<"SalePajamas", 'Float'>
    readonly saleId: FieldRef<"SalePajamas", 'String'>
    readonly pajamaId: FieldRef<"SalePajamas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SalePajamas findUnique
   */
  export type SalePajamasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    /**
     * Filter, which SalePajamas to fetch.
     */
    where: SalePajamasWhereUniqueInput
  }

  /**
   * SalePajamas findUniqueOrThrow
   */
  export type SalePajamasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    /**
     * Filter, which SalePajamas to fetch.
     */
    where: SalePajamasWhereUniqueInput
  }

  /**
   * SalePajamas findFirst
   */
  export type SalePajamasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    /**
     * Filter, which SalePajamas to fetch.
     */
    where?: SalePajamasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePajamas to fetch.
     */
    orderBy?: SalePajamasOrderByWithRelationInput | SalePajamasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalePajamas.
     */
    cursor?: SalePajamasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePajamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePajamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalePajamas.
     */
    distinct?: SalePajamasScalarFieldEnum | SalePajamasScalarFieldEnum[]
  }

  /**
   * SalePajamas findFirstOrThrow
   */
  export type SalePajamasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    /**
     * Filter, which SalePajamas to fetch.
     */
    where?: SalePajamasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePajamas to fetch.
     */
    orderBy?: SalePajamasOrderByWithRelationInput | SalePajamasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalePajamas.
     */
    cursor?: SalePajamasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePajamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePajamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalePajamas.
     */
    distinct?: SalePajamasScalarFieldEnum | SalePajamasScalarFieldEnum[]
  }

  /**
   * SalePajamas findMany
   */
  export type SalePajamasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    /**
     * Filter, which SalePajamas to fetch.
     */
    where?: SalePajamasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePajamas to fetch.
     */
    orderBy?: SalePajamasOrderByWithRelationInput | SalePajamasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalePajamas.
     */
    cursor?: SalePajamasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePajamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePajamas.
     */
    skip?: number
    distinct?: SalePajamasScalarFieldEnum | SalePajamasScalarFieldEnum[]
  }

  /**
   * SalePajamas create
   */
  export type SalePajamasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    /**
     * The data needed to create a SalePajamas.
     */
    data: XOR<SalePajamasCreateInput, SalePajamasUncheckedCreateInput>
  }

  /**
   * SalePajamas createMany
   */
  export type SalePajamasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalePajamas.
     */
    data: SalePajamasCreateManyInput | SalePajamasCreateManyInput[]
  }

  /**
   * SalePajamas createManyAndReturn
   */
  export type SalePajamasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * The data used to create many SalePajamas.
     */
    data: SalePajamasCreateManyInput | SalePajamasCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalePajamas update
   */
  export type SalePajamasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    /**
     * The data needed to update a SalePajamas.
     */
    data: XOR<SalePajamasUpdateInput, SalePajamasUncheckedUpdateInput>
    /**
     * Choose, which SalePajamas to update.
     */
    where: SalePajamasWhereUniqueInput
  }

  /**
   * SalePajamas updateMany
   */
  export type SalePajamasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalePajamas.
     */
    data: XOR<SalePajamasUpdateManyMutationInput, SalePajamasUncheckedUpdateManyInput>
    /**
     * Filter which SalePajamas to update
     */
    where?: SalePajamasWhereInput
    /**
     * Limit how many SalePajamas to update.
     */
    limit?: number
  }

  /**
   * SalePajamas updateManyAndReturn
   */
  export type SalePajamasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * The data used to update SalePajamas.
     */
    data: XOR<SalePajamasUpdateManyMutationInput, SalePajamasUncheckedUpdateManyInput>
    /**
     * Filter which SalePajamas to update
     */
    where?: SalePajamasWhereInput
    /**
     * Limit how many SalePajamas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalePajamas upsert
   */
  export type SalePajamasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    /**
     * The filter to search for the SalePajamas to update in case it exists.
     */
    where: SalePajamasWhereUniqueInput
    /**
     * In case the SalePajamas found by the `where` argument doesn't exist, create a new SalePajamas with this data.
     */
    create: XOR<SalePajamasCreateInput, SalePajamasUncheckedCreateInput>
    /**
     * In case the SalePajamas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalePajamasUpdateInput, SalePajamasUncheckedUpdateInput>
  }

  /**
   * SalePajamas delete
   */
  export type SalePajamasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
    /**
     * Filter which SalePajamas to delete.
     */
    where: SalePajamasWhereUniqueInput
  }

  /**
   * SalePajamas deleteMany
   */
  export type SalePajamasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalePajamas to delete
     */
    where?: SalePajamasWhereInput
    /**
     * Limit how many SalePajamas to delete.
     */
    limit?: number
  }

  /**
   * SalePajamas without action
   */
  export type SalePajamasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePajamas
     */
    select?: SalePajamasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePajamas
     */
    omit?: SalePajamasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePajamasInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    zipCode: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    address: string | null
    number: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    zipCode: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    address: string | null
    number: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    zipCode: number
    state: number
    city: number
    neighborhood: number
    address: number
    number: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    zipCode?: true
    state?: true
    city?: true
    neighborhood?: true
    address?: true
    number?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    zipCode?: true
    state?: true
    city?: true
    neighborhood?: true
    address?: true
    number?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    zipCode?: true
    state?: true
    city?: true
    neighborhood?: true
    address?: true
    number?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    zipCode: string
    state: string
    city: string
    neighborhood: string
    address: string
    number: string
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zipCode?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    address?: boolean
    number?: boolean
    sales?: boolean | Address$salesArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zipCode?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    address?: boolean
    number?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zipCode?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    address?: boolean
    number?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    zipCode?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    address?: boolean
    number?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zipCode" | "state" | "city" | "neighborhood" | "address" | "number", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Address$salesArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zipCode: string
      state: string
      city: string
      neighborhood: string
      address: string
      number: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Address$salesArgs<ExtArgs> = {}>(args?: Subset<T, Address$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly neighborhood: FieldRef<"Address", 'String'>
    readonly address: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.sales
   */
  export type Address$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const PajamaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    price: 'price',
    season: 'season',
    type: 'type',
    gender: 'gender',
    favorite: 'favorite',
    onSale: 'onSale',
    salePercent: 'salePercent'
  };

  export type PajamaScalarFieldEnum = (typeof PajamaScalarFieldEnum)[keyof typeof PajamaScalarFieldEnum]


  export const PajamaSizeScalarFieldEnum: {
    id: 'id',
    stockQuantity: 'stockQuantity',
    size: 'size',
    pajamaId: 'pajamaId'
  };

  export type PajamaSizeScalarFieldEnum = (typeof PajamaSizeScalarFieldEnum)[keyof typeof PajamaSizeScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    buyerName: 'buyerName',
    cpf: 'cpf',
    price: 'price',
    paymentMethod: 'paymentMethod',
    installments: 'installments',
    cardNumber: 'cardNumber',
    createdAt: 'createdAt',
    addressId: 'addressId'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SalePajamasScalarFieldEnum: {
    quantity: 'quantity',
    price: 'price',
    saleId: 'saleId',
    pajamaId: 'pajamaId'
  };

  export type SalePajamasScalarFieldEnum = (typeof SalePajamasScalarFieldEnum)[keyof typeof SalePajamasScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    zipCode: 'zipCode',
    state: 'state',
    city: 'city',
    neighborhood: 'neighborhood',
    address: 'address',
    number: 'number'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    name?: StringFilter<"Feedback"> | string
    description?: StringFilter<"Feedback"> | string
    rating?: FloatFilter<"Feedback"> | number
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    name?: StringFilter<"Feedback"> | string
    description?: StringFilter<"Feedback"> | string
    rating?: FloatFilter<"Feedback"> | number
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    name?: StringWithAggregatesFilter<"Feedback"> | string
    description?: StringWithAggregatesFilter<"Feedback"> | string
    rating?: FloatWithAggregatesFilter<"Feedback"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type PajamaWhereInput = {
    AND?: PajamaWhereInput | PajamaWhereInput[]
    OR?: PajamaWhereInput[]
    NOT?: PajamaWhereInput | PajamaWhereInput[]
    id?: StringFilter<"Pajama"> | string
    name?: StringFilter<"Pajama"> | string
    description?: StringFilter<"Pajama"> | string
    image?: StringFilter<"Pajama"> | string
    price?: FloatFilter<"Pajama"> | number
    season?: StringFilter<"Pajama"> | string
    type?: StringFilter<"Pajama"> | string
    gender?: StringFilter<"Pajama"> | string
    favorite?: BoolFilter<"Pajama"> | boolean
    onSale?: BoolFilter<"Pajama"> | boolean
    salePercent?: FloatNullableFilter<"Pajama"> | number | null
    sizes?: PajamaSizeListRelationFilter
    sales?: SalePajamasListRelationFilter
  }

  export type PajamaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    season?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    favorite?: SortOrder
    onSale?: SortOrder
    salePercent?: SortOrderInput | SortOrder
    sizes?: PajamaSizeOrderByRelationAggregateInput
    sales?: SalePajamasOrderByRelationAggregateInput
  }

  export type PajamaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PajamaWhereInput | PajamaWhereInput[]
    OR?: PajamaWhereInput[]
    NOT?: PajamaWhereInput | PajamaWhereInput[]
    name?: StringFilter<"Pajama"> | string
    description?: StringFilter<"Pajama"> | string
    image?: StringFilter<"Pajama"> | string
    price?: FloatFilter<"Pajama"> | number
    season?: StringFilter<"Pajama"> | string
    type?: StringFilter<"Pajama"> | string
    gender?: StringFilter<"Pajama"> | string
    favorite?: BoolFilter<"Pajama"> | boolean
    onSale?: BoolFilter<"Pajama"> | boolean
    salePercent?: FloatNullableFilter<"Pajama"> | number | null
    sizes?: PajamaSizeListRelationFilter
    sales?: SalePajamasListRelationFilter
  }, "id">

  export type PajamaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    season?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    favorite?: SortOrder
    onSale?: SortOrder
    salePercent?: SortOrderInput | SortOrder
    _count?: PajamaCountOrderByAggregateInput
    _avg?: PajamaAvgOrderByAggregateInput
    _max?: PajamaMaxOrderByAggregateInput
    _min?: PajamaMinOrderByAggregateInput
    _sum?: PajamaSumOrderByAggregateInput
  }

  export type PajamaScalarWhereWithAggregatesInput = {
    AND?: PajamaScalarWhereWithAggregatesInput | PajamaScalarWhereWithAggregatesInput[]
    OR?: PajamaScalarWhereWithAggregatesInput[]
    NOT?: PajamaScalarWhereWithAggregatesInput | PajamaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pajama"> | string
    name?: StringWithAggregatesFilter<"Pajama"> | string
    description?: StringWithAggregatesFilter<"Pajama"> | string
    image?: StringWithAggregatesFilter<"Pajama"> | string
    price?: FloatWithAggregatesFilter<"Pajama"> | number
    season?: StringWithAggregatesFilter<"Pajama"> | string
    type?: StringWithAggregatesFilter<"Pajama"> | string
    gender?: StringWithAggregatesFilter<"Pajama"> | string
    favorite?: BoolWithAggregatesFilter<"Pajama"> | boolean
    onSale?: BoolWithAggregatesFilter<"Pajama"> | boolean
    salePercent?: FloatNullableWithAggregatesFilter<"Pajama"> | number | null
  }

  export type PajamaSizeWhereInput = {
    AND?: PajamaSizeWhereInput | PajamaSizeWhereInput[]
    OR?: PajamaSizeWhereInput[]
    NOT?: PajamaSizeWhereInput | PajamaSizeWhereInput[]
    id?: StringFilter<"PajamaSize"> | string
    stockQuantity?: IntFilter<"PajamaSize"> | number
    size?: StringFilter<"PajamaSize"> | string
    pajamaId?: StringFilter<"PajamaSize"> | string
    pajama?: XOR<PajamaScalarRelationFilter, PajamaWhereInput>
  }

  export type PajamaSizeOrderByWithRelationInput = {
    id?: SortOrder
    stockQuantity?: SortOrder
    size?: SortOrder
    pajamaId?: SortOrder
    pajama?: PajamaOrderByWithRelationInput
  }

  export type PajamaSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PajamaSizeWhereInput | PajamaSizeWhereInput[]
    OR?: PajamaSizeWhereInput[]
    NOT?: PajamaSizeWhereInput | PajamaSizeWhereInput[]
    stockQuantity?: IntFilter<"PajamaSize"> | number
    size?: StringFilter<"PajamaSize"> | string
    pajamaId?: StringFilter<"PajamaSize"> | string
    pajama?: XOR<PajamaScalarRelationFilter, PajamaWhereInput>
  }, "id">

  export type PajamaSizeOrderByWithAggregationInput = {
    id?: SortOrder
    stockQuantity?: SortOrder
    size?: SortOrder
    pajamaId?: SortOrder
    _count?: PajamaSizeCountOrderByAggregateInput
    _avg?: PajamaSizeAvgOrderByAggregateInput
    _max?: PajamaSizeMaxOrderByAggregateInput
    _min?: PajamaSizeMinOrderByAggregateInput
    _sum?: PajamaSizeSumOrderByAggregateInput
  }

  export type PajamaSizeScalarWhereWithAggregatesInput = {
    AND?: PajamaSizeScalarWhereWithAggregatesInput | PajamaSizeScalarWhereWithAggregatesInput[]
    OR?: PajamaSizeScalarWhereWithAggregatesInput[]
    NOT?: PajamaSizeScalarWhereWithAggregatesInput | PajamaSizeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PajamaSize"> | string
    stockQuantity?: IntWithAggregatesFilter<"PajamaSize"> | number
    size?: StringWithAggregatesFilter<"PajamaSize"> | string
    pajamaId?: StringWithAggregatesFilter<"PajamaSize"> | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    buyerName?: StringFilter<"Sale"> | string
    cpf?: StringFilter<"Sale"> | string
    price?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    installments?: IntFilter<"Sale"> | number
    cardNumber?: StringNullableFilter<"Sale"> | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    addressId?: StringFilter<"Sale"> | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    pajamas?: SalePajamasListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    buyerName?: SortOrder
    cpf?: SortOrder
    price?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrder
    cardNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
    address?: AddressOrderByWithRelationInput
    pajamas?: SalePajamasOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    buyerName?: StringFilter<"Sale"> | string
    cpf?: StringFilter<"Sale"> | string
    price?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    installments?: IntFilter<"Sale"> | number
    cardNumber?: StringNullableFilter<"Sale"> | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    addressId?: StringFilter<"Sale"> | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    pajamas?: SalePajamasListRelationFilter
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    buyerName?: SortOrder
    cpf?: SortOrder
    price?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrder
    cardNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    buyerName?: StringWithAggregatesFilter<"Sale"> | string
    cpf?: StringWithAggregatesFilter<"Sale"> | string
    price?: FloatWithAggregatesFilter<"Sale"> | number
    paymentMethod?: StringWithAggregatesFilter<"Sale"> | string
    installments?: IntWithAggregatesFilter<"Sale"> | number
    cardNumber?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    addressId?: StringWithAggregatesFilter<"Sale"> | string
  }

  export type SalePajamasWhereInput = {
    AND?: SalePajamasWhereInput | SalePajamasWhereInput[]
    OR?: SalePajamasWhereInput[]
    NOT?: SalePajamasWhereInput | SalePajamasWhereInput[]
    quantity?: IntFilter<"SalePajamas"> | number
    price?: FloatFilter<"SalePajamas"> | number
    saleId?: StringFilter<"SalePajamas"> | string
    pajamaId?: StringFilter<"SalePajamas"> | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    pajama?: XOR<PajamaScalarRelationFilter, PajamaWhereInput>
  }

  export type SalePajamasOrderByWithRelationInput = {
    quantity?: SortOrder
    price?: SortOrder
    saleId?: SortOrder
    pajamaId?: SortOrder
    sale?: SaleOrderByWithRelationInput
    pajama?: PajamaOrderByWithRelationInput
  }

  export type SalePajamasWhereUniqueInput = Prisma.AtLeast<{
    saleId_pajamaId?: SalePajamasSaleIdPajamaIdCompoundUniqueInput
    AND?: SalePajamasWhereInput | SalePajamasWhereInput[]
    OR?: SalePajamasWhereInput[]
    NOT?: SalePajamasWhereInput | SalePajamasWhereInput[]
    quantity?: IntFilter<"SalePajamas"> | number
    price?: FloatFilter<"SalePajamas"> | number
    saleId?: StringFilter<"SalePajamas"> | string
    pajamaId?: StringFilter<"SalePajamas"> | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    pajama?: XOR<PajamaScalarRelationFilter, PajamaWhereInput>
  }, "saleId_pajamaId">

  export type SalePajamasOrderByWithAggregationInput = {
    quantity?: SortOrder
    price?: SortOrder
    saleId?: SortOrder
    pajamaId?: SortOrder
    _count?: SalePajamasCountOrderByAggregateInput
    _avg?: SalePajamasAvgOrderByAggregateInput
    _max?: SalePajamasMaxOrderByAggregateInput
    _min?: SalePajamasMinOrderByAggregateInput
    _sum?: SalePajamasSumOrderByAggregateInput
  }

  export type SalePajamasScalarWhereWithAggregatesInput = {
    AND?: SalePajamasScalarWhereWithAggregatesInput | SalePajamasScalarWhereWithAggregatesInput[]
    OR?: SalePajamasScalarWhereWithAggregatesInput[]
    NOT?: SalePajamasScalarWhereWithAggregatesInput | SalePajamasScalarWhereWithAggregatesInput[]
    quantity?: IntWithAggregatesFilter<"SalePajamas"> | number
    price?: FloatWithAggregatesFilter<"SalePajamas"> | number
    saleId?: StringWithAggregatesFilter<"SalePajamas"> | string
    pajamaId?: StringWithAggregatesFilter<"SalePajamas"> | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    zipCode?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    neighborhood?: StringFilter<"Address"> | string
    address?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    sales?: SaleListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    number?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    zipCode?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    neighborhood?: StringFilter<"Address"> | string
    address?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    sales?: SaleListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    number?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    zipCode?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    neighborhood?: StringWithAggregatesFilter<"Address"> | string
    address?: StringWithAggregatesFilter<"Address"> | string
    number?: StringWithAggregatesFilter<"Address"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    name: string
    description: string
    rating: number
    createdAt?: Date | string
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    rating: number
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    name: string
    description: string
    rating: number
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PajamaCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    price: number
    season: string
    type: string
    gender: string
    favorite?: boolean
    onSale?: boolean
    salePercent?: number | null
    sizes?: PajamaSizeCreateNestedManyWithoutPajamaInput
    sales?: SalePajamasCreateNestedManyWithoutPajamaInput
  }

  export type PajamaUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    price: number
    season: string
    type: string
    gender: string
    favorite?: boolean
    onSale?: boolean
    salePercent?: number | null
    sizes?: PajamaSizeUncheckedCreateNestedManyWithoutPajamaInput
    sales?: SalePajamasUncheckedCreateNestedManyWithoutPajamaInput
  }

  export type PajamaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    onSale?: BoolFieldUpdateOperationsInput | boolean
    salePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    sizes?: PajamaSizeUpdateManyWithoutPajamaNestedInput
    sales?: SalePajamasUpdateManyWithoutPajamaNestedInput
  }

  export type PajamaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    onSale?: BoolFieldUpdateOperationsInput | boolean
    salePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    sizes?: PajamaSizeUncheckedUpdateManyWithoutPajamaNestedInput
    sales?: SalePajamasUncheckedUpdateManyWithoutPajamaNestedInput
  }

  export type PajamaCreateManyInput = {
    id?: string
    name: string
    description: string
    image: string
    price: number
    season: string
    type: string
    gender: string
    favorite?: boolean
    onSale?: boolean
    salePercent?: number | null
  }

  export type PajamaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    onSale?: BoolFieldUpdateOperationsInput | boolean
    salePercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PajamaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    onSale?: BoolFieldUpdateOperationsInput | boolean
    salePercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PajamaSizeCreateInput = {
    id?: string
    stockQuantity: number
    size: string
    pajama: PajamaCreateNestedOneWithoutSizesInput
  }

  export type PajamaSizeUncheckedCreateInput = {
    id?: string
    stockQuantity: number
    size: string
    pajamaId: string
  }

  export type PajamaSizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    pajama?: PajamaUpdateOneRequiredWithoutSizesNestedInput
  }

  export type PajamaSizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    pajamaId?: StringFieldUpdateOperationsInput | string
  }

  export type PajamaSizeCreateManyInput = {
    id?: string
    stockQuantity: number
    size: string
    pajamaId: string
  }

  export type PajamaSizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type PajamaSizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    pajamaId?: StringFieldUpdateOperationsInput | string
  }

  export type SaleCreateInput = {
    id?: string
    buyerName: string
    cpf: string
    price: number
    paymentMethod: string
    installments?: number
    cardNumber?: string | null
    createdAt?: Date | string
    address: AddressCreateNestedOneWithoutSalesInput
    pajamas?: SalePajamasCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    buyerName: string
    cpf: string
    price: number
    paymentMethod: string
    installments?: number
    cardNumber?: string | null
    createdAt?: Date | string
    addressId: string
    pajamas?: SalePajamasUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: IntFieldUpdateOperationsInput | number
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutSalesNestedInput
    pajamas?: SalePajamasUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: IntFieldUpdateOperationsInput | number
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: StringFieldUpdateOperationsInput | string
    pajamas?: SalePajamasUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: string
    buyerName: string
    cpf: string
    price: number
    paymentMethod: string
    installments?: number
    cardNumber?: string | null
    createdAt?: Date | string
    addressId: string
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: IntFieldUpdateOperationsInput | number
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: IntFieldUpdateOperationsInput | number
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: StringFieldUpdateOperationsInput | string
  }

  export type SalePajamasCreateInput = {
    quantity: number
    price: number
    sale: SaleCreateNestedOneWithoutPajamasInput
    pajama: PajamaCreateNestedOneWithoutSalesInput
  }

  export type SalePajamasUncheckedCreateInput = {
    quantity: number
    price: number
    saleId: string
    pajamaId: string
  }

  export type SalePajamasUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    sale?: SaleUpdateOneRequiredWithoutPajamasNestedInput
    pajama?: PajamaUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SalePajamasUncheckedUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleId?: StringFieldUpdateOperationsInput | string
    pajamaId?: StringFieldUpdateOperationsInput | string
  }

  export type SalePajamasCreateManyInput = {
    quantity: number
    price: number
    saleId: string
    pajamaId: string
  }

  export type SalePajamasUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalePajamasUncheckedUpdateManyInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleId?: StringFieldUpdateOperationsInput | string
    pajamaId?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateInput = {
    id?: string
    zipCode: string
    state: string
    city: string
    neighborhood: string
    address: string
    number: string
    sales?: SaleCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    zipCode: string
    state: string
    city: string
    neighborhood: string
    address: string
    number: string
    sales?: SaleUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    sales?: SaleUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    sales?: SaleUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    zipCode: string
    state: string
    city: string
    neighborhood: string
    address: string
    number: string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PajamaSizeListRelationFilter = {
    every?: PajamaSizeWhereInput
    some?: PajamaSizeWhereInput
    none?: PajamaSizeWhereInput
  }

  export type SalePajamasListRelationFilter = {
    every?: SalePajamasWhereInput
    some?: SalePajamasWhereInput
    none?: SalePajamasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PajamaSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalePajamasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PajamaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    season?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    favorite?: SortOrder
    onSale?: SortOrder
    salePercent?: SortOrder
  }

  export type PajamaAvgOrderByAggregateInput = {
    price?: SortOrder
    salePercent?: SortOrder
  }

  export type PajamaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    season?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    favorite?: SortOrder
    onSale?: SortOrder
    salePercent?: SortOrder
  }

  export type PajamaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    season?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    favorite?: SortOrder
    onSale?: SortOrder
    salePercent?: SortOrder
  }

  export type PajamaSumOrderByAggregateInput = {
    price?: SortOrder
    salePercent?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PajamaScalarRelationFilter = {
    is?: PajamaWhereInput
    isNot?: PajamaWhereInput
  }

  export type PajamaSizeCountOrderByAggregateInput = {
    id?: SortOrder
    stockQuantity?: SortOrder
    size?: SortOrder
    pajamaId?: SortOrder
  }

  export type PajamaSizeAvgOrderByAggregateInput = {
    stockQuantity?: SortOrder
  }

  export type PajamaSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    stockQuantity?: SortOrder
    size?: SortOrder
    pajamaId?: SortOrder
  }

  export type PajamaSizeMinOrderByAggregateInput = {
    id?: SortOrder
    stockQuantity?: SortOrder
    size?: SortOrder
    pajamaId?: SortOrder
  }

  export type PajamaSizeSumOrderByAggregateInput = {
    stockQuantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    buyerName?: SortOrder
    cpf?: SortOrder
    price?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrder
    cardNumber?: SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    price?: SortOrder
    installments?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    buyerName?: SortOrder
    cpf?: SortOrder
    price?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrder
    cardNumber?: SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    buyerName?: SortOrder
    cpf?: SortOrder
    price?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrder
    cardNumber?: SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    price?: SortOrder
    installments?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SaleScalarRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type SalePajamasSaleIdPajamaIdCompoundUniqueInput = {
    saleId: string
    pajamaId: string
  }

  export type SalePajamasCountOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    saleId?: SortOrder
    pajamaId?: SortOrder
  }

  export type SalePajamasAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type SalePajamasMaxOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    saleId?: SortOrder
    pajamaId?: SortOrder
  }

  export type SalePajamasMinOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    saleId?: SortOrder
    pajamaId?: SortOrder
  }

  export type SalePajamasSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    number?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    number?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    address?: SortOrder
    number?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PajamaSizeCreateNestedManyWithoutPajamaInput = {
    create?: XOR<PajamaSizeCreateWithoutPajamaInput, PajamaSizeUncheckedCreateWithoutPajamaInput> | PajamaSizeCreateWithoutPajamaInput[] | PajamaSizeUncheckedCreateWithoutPajamaInput[]
    connectOrCreate?: PajamaSizeCreateOrConnectWithoutPajamaInput | PajamaSizeCreateOrConnectWithoutPajamaInput[]
    createMany?: PajamaSizeCreateManyPajamaInputEnvelope
    connect?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
  }

  export type SalePajamasCreateNestedManyWithoutPajamaInput = {
    create?: XOR<SalePajamasCreateWithoutPajamaInput, SalePajamasUncheckedCreateWithoutPajamaInput> | SalePajamasCreateWithoutPajamaInput[] | SalePajamasUncheckedCreateWithoutPajamaInput[]
    connectOrCreate?: SalePajamasCreateOrConnectWithoutPajamaInput | SalePajamasCreateOrConnectWithoutPajamaInput[]
    createMany?: SalePajamasCreateManyPajamaInputEnvelope
    connect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
  }

  export type PajamaSizeUncheckedCreateNestedManyWithoutPajamaInput = {
    create?: XOR<PajamaSizeCreateWithoutPajamaInput, PajamaSizeUncheckedCreateWithoutPajamaInput> | PajamaSizeCreateWithoutPajamaInput[] | PajamaSizeUncheckedCreateWithoutPajamaInput[]
    connectOrCreate?: PajamaSizeCreateOrConnectWithoutPajamaInput | PajamaSizeCreateOrConnectWithoutPajamaInput[]
    createMany?: PajamaSizeCreateManyPajamaInputEnvelope
    connect?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
  }

  export type SalePajamasUncheckedCreateNestedManyWithoutPajamaInput = {
    create?: XOR<SalePajamasCreateWithoutPajamaInput, SalePajamasUncheckedCreateWithoutPajamaInput> | SalePajamasCreateWithoutPajamaInput[] | SalePajamasUncheckedCreateWithoutPajamaInput[]
    connectOrCreate?: SalePajamasCreateOrConnectWithoutPajamaInput | SalePajamasCreateOrConnectWithoutPajamaInput[]
    createMany?: SalePajamasCreateManyPajamaInputEnvelope
    connect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PajamaSizeUpdateManyWithoutPajamaNestedInput = {
    create?: XOR<PajamaSizeCreateWithoutPajamaInput, PajamaSizeUncheckedCreateWithoutPajamaInput> | PajamaSizeCreateWithoutPajamaInput[] | PajamaSizeUncheckedCreateWithoutPajamaInput[]
    connectOrCreate?: PajamaSizeCreateOrConnectWithoutPajamaInput | PajamaSizeCreateOrConnectWithoutPajamaInput[]
    upsert?: PajamaSizeUpsertWithWhereUniqueWithoutPajamaInput | PajamaSizeUpsertWithWhereUniqueWithoutPajamaInput[]
    createMany?: PajamaSizeCreateManyPajamaInputEnvelope
    set?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
    disconnect?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
    delete?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
    connect?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
    update?: PajamaSizeUpdateWithWhereUniqueWithoutPajamaInput | PajamaSizeUpdateWithWhereUniqueWithoutPajamaInput[]
    updateMany?: PajamaSizeUpdateManyWithWhereWithoutPajamaInput | PajamaSizeUpdateManyWithWhereWithoutPajamaInput[]
    deleteMany?: PajamaSizeScalarWhereInput | PajamaSizeScalarWhereInput[]
  }

  export type SalePajamasUpdateManyWithoutPajamaNestedInput = {
    create?: XOR<SalePajamasCreateWithoutPajamaInput, SalePajamasUncheckedCreateWithoutPajamaInput> | SalePajamasCreateWithoutPajamaInput[] | SalePajamasUncheckedCreateWithoutPajamaInput[]
    connectOrCreate?: SalePajamasCreateOrConnectWithoutPajamaInput | SalePajamasCreateOrConnectWithoutPajamaInput[]
    upsert?: SalePajamasUpsertWithWhereUniqueWithoutPajamaInput | SalePajamasUpsertWithWhereUniqueWithoutPajamaInput[]
    createMany?: SalePajamasCreateManyPajamaInputEnvelope
    set?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    disconnect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    delete?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    connect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    update?: SalePajamasUpdateWithWhereUniqueWithoutPajamaInput | SalePajamasUpdateWithWhereUniqueWithoutPajamaInput[]
    updateMany?: SalePajamasUpdateManyWithWhereWithoutPajamaInput | SalePajamasUpdateManyWithWhereWithoutPajamaInput[]
    deleteMany?: SalePajamasScalarWhereInput | SalePajamasScalarWhereInput[]
  }

  export type PajamaSizeUncheckedUpdateManyWithoutPajamaNestedInput = {
    create?: XOR<PajamaSizeCreateWithoutPajamaInput, PajamaSizeUncheckedCreateWithoutPajamaInput> | PajamaSizeCreateWithoutPajamaInput[] | PajamaSizeUncheckedCreateWithoutPajamaInput[]
    connectOrCreate?: PajamaSizeCreateOrConnectWithoutPajamaInput | PajamaSizeCreateOrConnectWithoutPajamaInput[]
    upsert?: PajamaSizeUpsertWithWhereUniqueWithoutPajamaInput | PajamaSizeUpsertWithWhereUniqueWithoutPajamaInput[]
    createMany?: PajamaSizeCreateManyPajamaInputEnvelope
    set?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
    disconnect?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
    delete?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
    connect?: PajamaSizeWhereUniqueInput | PajamaSizeWhereUniqueInput[]
    update?: PajamaSizeUpdateWithWhereUniqueWithoutPajamaInput | PajamaSizeUpdateWithWhereUniqueWithoutPajamaInput[]
    updateMany?: PajamaSizeUpdateManyWithWhereWithoutPajamaInput | PajamaSizeUpdateManyWithWhereWithoutPajamaInput[]
    deleteMany?: PajamaSizeScalarWhereInput | PajamaSizeScalarWhereInput[]
  }

  export type SalePajamasUncheckedUpdateManyWithoutPajamaNestedInput = {
    create?: XOR<SalePajamasCreateWithoutPajamaInput, SalePajamasUncheckedCreateWithoutPajamaInput> | SalePajamasCreateWithoutPajamaInput[] | SalePajamasUncheckedCreateWithoutPajamaInput[]
    connectOrCreate?: SalePajamasCreateOrConnectWithoutPajamaInput | SalePajamasCreateOrConnectWithoutPajamaInput[]
    upsert?: SalePajamasUpsertWithWhereUniqueWithoutPajamaInput | SalePajamasUpsertWithWhereUniqueWithoutPajamaInput[]
    createMany?: SalePajamasCreateManyPajamaInputEnvelope
    set?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    disconnect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    delete?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    connect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    update?: SalePajamasUpdateWithWhereUniqueWithoutPajamaInput | SalePajamasUpdateWithWhereUniqueWithoutPajamaInput[]
    updateMany?: SalePajamasUpdateManyWithWhereWithoutPajamaInput | SalePajamasUpdateManyWithWhereWithoutPajamaInput[]
    deleteMany?: SalePajamasScalarWhereInput | SalePajamasScalarWhereInput[]
  }

  export type PajamaCreateNestedOneWithoutSizesInput = {
    create?: XOR<PajamaCreateWithoutSizesInput, PajamaUncheckedCreateWithoutSizesInput>
    connectOrCreate?: PajamaCreateOrConnectWithoutSizesInput
    connect?: PajamaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PajamaUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<PajamaCreateWithoutSizesInput, PajamaUncheckedCreateWithoutSizesInput>
    connectOrCreate?: PajamaCreateOrConnectWithoutSizesInput
    upsert?: PajamaUpsertWithoutSizesInput
    connect?: PajamaWhereUniqueInput
    update?: XOR<XOR<PajamaUpdateToOneWithWhereWithoutSizesInput, PajamaUpdateWithoutSizesInput>, PajamaUncheckedUpdateWithoutSizesInput>
  }

  export type AddressCreateNestedOneWithoutSalesInput = {
    create?: XOR<AddressCreateWithoutSalesInput, AddressUncheckedCreateWithoutSalesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutSalesInput
    connect?: AddressWhereUniqueInput
  }

  export type SalePajamasCreateNestedManyWithoutSaleInput = {
    create?: XOR<SalePajamasCreateWithoutSaleInput, SalePajamasUncheckedCreateWithoutSaleInput> | SalePajamasCreateWithoutSaleInput[] | SalePajamasUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalePajamasCreateOrConnectWithoutSaleInput | SalePajamasCreateOrConnectWithoutSaleInput[]
    createMany?: SalePajamasCreateManySaleInputEnvelope
    connect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
  }

  export type SalePajamasUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SalePajamasCreateWithoutSaleInput, SalePajamasUncheckedCreateWithoutSaleInput> | SalePajamasCreateWithoutSaleInput[] | SalePajamasUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalePajamasCreateOrConnectWithoutSaleInput | SalePajamasCreateOrConnectWithoutSaleInput[]
    createMany?: SalePajamasCreateManySaleInputEnvelope
    connect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AddressUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<AddressCreateWithoutSalesInput, AddressUncheckedCreateWithoutSalesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutSalesInput
    upsert?: AddressUpsertWithoutSalesInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutSalesInput, AddressUpdateWithoutSalesInput>, AddressUncheckedUpdateWithoutSalesInput>
  }

  export type SalePajamasUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SalePajamasCreateWithoutSaleInput, SalePajamasUncheckedCreateWithoutSaleInput> | SalePajamasCreateWithoutSaleInput[] | SalePajamasUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalePajamasCreateOrConnectWithoutSaleInput | SalePajamasCreateOrConnectWithoutSaleInput[]
    upsert?: SalePajamasUpsertWithWhereUniqueWithoutSaleInput | SalePajamasUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SalePajamasCreateManySaleInputEnvelope
    set?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    disconnect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    delete?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    connect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    update?: SalePajamasUpdateWithWhereUniqueWithoutSaleInput | SalePajamasUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SalePajamasUpdateManyWithWhereWithoutSaleInput | SalePajamasUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SalePajamasScalarWhereInput | SalePajamasScalarWhereInput[]
  }

  export type SalePajamasUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SalePajamasCreateWithoutSaleInput, SalePajamasUncheckedCreateWithoutSaleInput> | SalePajamasCreateWithoutSaleInput[] | SalePajamasUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalePajamasCreateOrConnectWithoutSaleInput | SalePajamasCreateOrConnectWithoutSaleInput[]
    upsert?: SalePajamasUpsertWithWhereUniqueWithoutSaleInput | SalePajamasUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SalePajamasCreateManySaleInputEnvelope
    set?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    disconnect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    delete?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    connect?: SalePajamasWhereUniqueInput | SalePajamasWhereUniqueInput[]
    update?: SalePajamasUpdateWithWhereUniqueWithoutSaleInput | SalePajamasUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SalePajamasUpdateManyWithWhereWithoutSaleInput | SalePajamasUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SalePajamasScalarWhereInput | SalePajamasScalarWhereInput[]
  }

  export type SaleCreateNestedOneWithoutPajamasInput = {
    create?: XOR<SaleCreateWithoutPajamasInput, SaleUncheckedCreateWithoutPajamasInput>
    connectOrCreate?: SaleCreateOrConnectWithoutPajamasInput
    connect?: SaleWhereUniqueInput
  }

  export type PajamaCreateNestedOneWithoutSalesInput = {
    create?: XOR<PajamaCreateWithoutSalesInput, PajamaUncheckedCreateWithoutSalesInput>
    connectOrCreate?: PajamaCreateOrConnectWithoutSalesInput
    connect?: PajamaWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutPajamasNestedInput = {
    create?: XOR<SaleCreateWithoutPajamasInput, SaleUncheckedCreateWithoutPajamasInput>
    connectOrCreate?: SaleCreateOrConnectWithoutPajamasInput
    upsert?: SaleUpsertWithoutPajamasInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutPajamasInput, SaleUpdateWithoutPajamasInput>, SaleUncheckedUpdateWithoutPajamasInput>
  }

  export type PajamaUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<PajamaCreateWithoutSalesInput, PajamaUncheckedCreateWithoutSalesInput>
    connectOrCreate?: PajamaCreateOrConnectWithoutSalesInput
    upsert?: PajamaUpsertWithoutSalesInput
    connect?: PajamaWhereUniqueInput
    update?: XOR<XOR<PajamaUpdateToOneWithWhereWithoutSalesInput, PajamaUpdateWithoutSalesInput>, PajamaUncheckedUpdateWithoutSalesInput>
  }

  export type SaleCreateNestedManyWithoutAddressInput = {
    create?: XOR<SaleCreateWithoutAddressInput, SaleUncheckedCreateWithoutAddressInput> | SaleCreateWithoutAddressInput[] | SaleUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutAddressInput | SaleCreateOrConnectWithoutAddressInput[]
    createMany?: SaleCreateManyAddressInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<SaleCreateWithoutAddressInput, SaleUncheckedCreateWithoutAddressInput> | SaleCreateWithoutAddressInput[] | SaleUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutAddressInput | SaleCreateOrConnectWithoutAddressInput[]
    createMany?: SaleCreateManyAddressInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUpdateManyWithoutAddressNestedInput = {
    create?: XOR<SaleCreateWithoutAddressInput, SaleUncheckedCreateWithoutAddressInput> | SaleCreateWithoutAddressInput[] | SaleUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutAddressInput | SaleCreateOrConnectWithoutAddressInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutAddressInput | SaleUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: SaleCreateManyAddressInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutAddressInput | SaleUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutAddressInput | SaleUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<SaleCreateWithoutAddressInput, SaleUncheckedCreateWithoutAddressInput> | SaleCreateWithoutAddressInput[] | SaleUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutAddressInput | SaleCreateOrConnectWithoutAddressInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutAddressInput | SaleUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: SaleCreateManyAddressInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutAddressInput | SaleUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutAddressInput | SaleUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PajamaSizeCreateWithoutPajamaInput = {
    id?: string
    stockQuantity: number
    size: string
  }

  export type PajamaSizeUncheckedCreateWithoutPajamaInput = {
    id?: string
    stockQuantity: number
    size: string
  }

  export type PajamaSizeCreateOrConnectWithoutPajamaInput = {
    where: PajamaSizeWhereUniqueInput
    create: XOR<PajamaSizeCreateWithoutPajamaInput, PajamaSizeUncheckedCreateWithoutPajamaInput>
  }

  export type PajamaSizeCreateManyPajamaInputEnvelope = {
    data: PajamaSizeCreateManyPajamaInput | PajamaSizeCreateManyPajamaInput[]
  }

  export type SalePajamasCreateWithoutPajamaInput = {
    quantity: number
    price: number
    sale: SaleCreateNestedOneWithoutPajamasInput
  }

  export type SalePajamasUncheckedCreateWithoutPajamaInput = {
    quantity: number
    price: number
    saleId: string
  }

  export type SalePajamasCreateOrConnectWithoutPajamaInput = {
    where: SalePajamasWhereUniqueInput
    create: XOR<SalePajamasCreateWithoutPajamaInput, SalePajamasUncheckedCreateWithoutPajamaInput>
  }

  export type SalePajamasCreateManyPajamaInputEnvelope = {
    data: SalePajamasCreateManyPajamaInput | SalePajamasCreateManyPajamaInput[]
  }

  export type PajamaSizeUpsertWithWhereUniqueWithoutPajamaInput = {
    where: PajamaSizeWhereUniqueInput
    update: XOR<PajamaSizeUpdateWithoutPajamaInput, PajamaSizeUncheckedUpdateWithoutPajamaInput>
    create: XOR<PajamaSizeCreateWithoutPajamaInput, PajamaSizeUncheckedCreateWithoutPajamaInput>
  }

  export type PajamaSizeUpdateWithWhereUniqueWithoutPajamaInput = {
    where: PajamaSizeWhereUniqueInput
    data: XOR<PajamaSizeUpdateWithoutPajamaInput, PajamaSizeUncheckedUpdateWithoutPajamaInput>
  }

  export type PajamaSizeUpdateManyWithWhereWithoutPajamaInput = {
    where: PajamaSizeScalarWhereInput
    data: XOR<PajamaSizeUpdateManyMutationInput, PajamaSizeUncheckedUpdateManyWithoutPajamaInput>
  }

  export type PajamaSizeScalarWhereInput = {
    AND?: PajamaSizeScalarWhereInput | PajamaSizeScalarWhereInput[]
    OR?: PajamaSizeScalarWhereInput[]
    NOT?: PajamaSizeScalarWhereInput | PajamaSizeScalarWhereInput[]
    id?: StringFilter<"PajamaSize"> | string
    stockQuantity?: IntFilter<"PajamaSize"> | number
    size?: StringFilter<"PajamaSize"> | string
    pajamaId?: StringFilter<"PajamaSize"> | string
  }

  export type SalePajamasUpsertWithWhereUniqueWithoutPajamaInput = {
    where: SalePajamasWhereUniqueInput
    update: XOR<SalePajamasUpdateWithoutPajamaInput, SalePajamasUncheckedUpdateWithoutPajamaInput>
    create: XOR<SalePajamasCreateWithoutPajamaInput, SalePajamasUncheckedCreateWithoutPajamaInput>
  }

  export type SalePajamasUpdateWithWhereUniqueWithoutPajamaInput = {
    where: SalePajamasWhereUniqueInput
    data: XOR<SalePajamasUpdateWithoutPajamaInput, SalePajamasUncheckedUpdateWithoutPajamaInput>
  }

  export type SalePajamasUpdateManyWithWhereWithoutPajamaInput = {
    where: SalePajamasScalarWhereInput
    data: XOR<SalePajamasUpdateManyMutationInput, SalePajamasUncheckedUpdateManyWithoutPajamaInput>
  }

  export type SalePajamasScalarWhereInput = {
    AND?: SalePajamasScalarWhereInput | SalePajamasScalarWhereInput[]
    OR?: SalePajamasScalarWhereInput[]
    NOT?: SalePajamasScalarWhereInput | SalePajamasScalarWhereInput[]
    quantity?: IntFilter<"SalePajamas"> | number
    price?: FloatFilter<"SalePajamas"> | number
    saleId?: StringFilter<"SalePajamas"> | string
    pajamaId?: StringFilter<"SalePajamas"> | string
  }

  export type PajamaCreateWithoutSizesInput = {
    id?: string
    name: string
    description: string
    image: string
    price: number
    season: string
    type: string
    gender: string
    favorite?: boolean
    onSale?: boolean
    salePercent?: number | null
    sales?: SalePajamasCreateNestedManyWithoutPajamaInput
  }

  export type PajamaUncheckedCreateWithoutSizesInput = {
    id?: string
    name: string
    description: string
    image: string
    price: number
    season: string
    type: string
    gender: string
    favorite?: boolean
    onSale?: boolean
    salePercent?: number | null
    sales?: SalePajamasUncheckedCreateNestedManyWithoutPajamaInput
  }

  export type PajamaCreateOrConnectWithoutSizesInput = {
    where: PajamaWhereUniqueInput
    create: XOR<PajamaCreateWithoutSizesInput, PajamaUncheckedCreateWithoutSizesInput>
  }

  export type PajamaUpsertWithoutSizesInput = {
    update: XOR<PajamaUpdateWithoutSizesInput, PajamaUncheckedUpdateWithoutSizesInput>
    create: XOR<PajamaCreateWithoutSizesInput, PajamaUncheckedCreateWithoutSizesInput>
    where?: PajamaWhereInput
  }

  export type PajamaUpdateToOneWithWhereWithoutSizesInput = {
    where?: PajamaWhereInput
    data: XOR<PajamaUpdateWithoutSizesInput, PajamaUncheckedUpdateWithoutSizesInput>
  }

  export type PajamaUpdateWithoutSizesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    onSale?: BoolFieldUpdateOperationsInput | boolean
    salePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    sales?: SalePajamasUpdateManyWithoutPajamaNestedInput
  }

  export type PajamaUncheckedUpdateWithoutSizesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    onSale?: BoolFieldUpdateOperationsInput | boolean
    salePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    sales?: SalePajamasUncheckedUpdateManyWithoutPajamaNestedInput
  }

  export type AddressCreateWithoutSalesInput = {
    id?: string
    zipCode: string
    state: string
    city: string
    neighborhood: string
    address: string
    number: string
  }

  export type AddressUncheckedCreateWithoutSalesInput = {
    id?: string
    zipCode: string
    state: string
    city: string
    neighborhood: string
    address: string
    number: string
  }

  export type AddressCreateOrConnectWithoutSalesInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutSalesInput, AddressUncheckedCreateWithoutSalesInput>
  }

  export type SalePajamasCreateWithoutSaleInput = {
    quantity: number
    price: number
    pajama: PajamaCreateNestedOneWithoutSalesInput
  }

  export type SalePajamasUncheckedCreateWithoutSaleInput = {
    quantity: number
    price: number
    pajamaId: string
  }

  export type SalePajamasCreateOrConnectWithoutSaleInput = {
    where: SalePajamasWhereUniqueInput
    create: XOR<SalePajamasCreateWithoutSaleInput, SalePajamasUncheckedCreateWithoutSaleInput>
  }

  export type SalePajamasCreateManySaleInputEnvelope = {
    data: SalePajamasCreateManySaleInput | SalePajamasCreateManySaleInput[]
  }

  export type AddressUpsertWithoutSalesInput = {
    update: XOR<AddressUpdateWithoutSalesInput, AddressUncheckedUpdateWithoutSalesInput>
    create: XOR<AddressCreateWithoutSalesInput, AddressUncheckedCreateWithoutSalesInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutSalesInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutSalesInput, AddressUncheckedUpdateWithoutSalesInput>
  }

  export type AddressUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type SalePajamasUpsertWithWhereUniqueWithoutSaleInput = {
    where: SalePajamasWhereUniqueInput
    update: XOR<SalePajamasUpdateWithoutSaleInput, SalePajamasUncheckedUpdateWithoutSaleInput>
    create: XOR<SalePajamasCreateWithoutSaleInput, SalePajamasUncheckedCreateWithoutSaleInput>
  }

  export type SalePajamasUpdateWithWhereUniqueWithoutSaleInput = {
    where: SalePajamasWhereUniqueInput
    data: XOR<SalePajamasUpdateWithoutSaleInput, SalePajamasUncheckedUpdateWithoutSaleInput>
  }

  export type SalePajamasUpdateManyWithWhereWithoutSaleInput = {
    where: SalePajamasScalarWhereInput
    data: XOR<SalePajamasUpdateManyMutationInput, SalePajamasUncheckedUpdateManyWithoutSaleInput>
  }

  export type SaleCreateWithoutPajamasInput = {
    id?: string
    buyerName: string
    cpf: string
    price: number
    paymentMethod: string
    installments?: number
    cardNumber?: string | null
    createdAt?: Date | string
    address: AddressCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutPajamasInput = {
    id?: string
    buyerName: string
    cpf: string
    price: number
    paymentMethod: string
    installments?: number
    cardNumber?: string | null
    createdAt?: Date | string
    addressId: string
  }

  export type SaleCreateOrConnectWithoutPajamasInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutPajamasInput, SaleUncheckedCreateWithoutPajamasInput>
  }

  export type PajamaCreateWithoutSalesInput = {
    id?: string
    name: string
    description: string
    image: string
    price: number
    season: string
    type: string
    gender: string
    favorite?: boolean
    onSale?: boolean
    salePercent?: number | null
    sizes?: PajamaSizeCreateNestedManyWithoutPajamaInput
  }

  export type PajamaUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    description: string
    image: string
    price: number
    season: string
    type: string
    gender: string
    favorite?: boolean
    onSale?: boolean
    salePercent?: number | null
    sizes?: PajamaSizeUncheckedCreateNestedManyWithoutPajamaInput
  }

  export type PajamaCreateOrConnectWithoutSalesInput = {
    where: PajamaWhereUniqueInput
    create: XOR<PajamaCreateWithoutSalesInput, PajamaUncheckedCreateWithoutSalesInput>
  }

  export type SaleUpsertWithoutPajamasInput = {
    update: XOR<SaleUpdateWithoutPajamasInput, SaleUncheckedUpdateWithoutPajamasInput>
    create: XOR<SaleCreateWithoutPajamasInput, SaleUncheckedCreateWithoutPajamasInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutPajamasInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutPajamasInput, SaleUncheckedUpdateWithoutPajamasInput>
  }

  export type SaleUpdateWithoutPajamasInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: IntFieldUpdateOperationsInput | number
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutPajamasInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: IntFieldUpdateOperationsInput | number
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: StringFieldUpdateOperationsInput | string
  }

  export type PajamaUpsertWithoutSalesInput = {
    update: XOR<PajamaUpdateWithoutSalesInput, PajamaUncheckedUpdateWithoutSalesInput>
    create: XOR<PajamaCreateWithoutSalesInput, PajamaUncheckedCreateWithoutSalesInput>
    where?: PajamaWhereInput
  }

  export type PajamaUpdateToOneWithWhereWithoutSalesInput = {
    where?: PajamaWhereInput
    data: XOR<PajamaUpdateWithoutSalesInput, PajamaUncheckedUpdateWithoutSalesInput>
  }

  export type PajamaUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    onSale?: BoolFieldUpdateOperationsInput | boolean
    salePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    sizes?: PajamaSizeUpdateManyWithoutPajamaNestedInput
  }

  export type PajamaUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    onSale?: BoolFieldUpdateOperationsInput | boolean
    salePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    sizes?: PajamaSizeUncheckedUpdateManyWithoutPajamaNestedInput
  }

  export type SaleCreateWithoutAddressInput = {
    id?: string
    buyerName: string
    cpf: string
    price: number
    paymentMethod: string
    installments?: number
    cardNumber?: string | null
    createdAt?: Date | string
    pajamas?: SalePajamasCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutAddressInput = {
    id?: string
    buyerName: string
    cpf: string
    price: number
    paymentMethod: string
    installments?: number
    cardNumber?: string | null
    createdAt?: Date | string
    pajamas?: SalePajamasUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutAddressInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutAddressInput, SaleUncheckedCreateWithoutAddressInput>
  }

  export type SaleCreateManyAddressInputEnvelope = {
    data: SaleCreateManyAddressInput | SaleCreateManyAddressInput[]
  }

  export type SaleUpsertWithWhereUniqueWithoutAddressInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutAddressInput, SaleUncheckedUpdateWithoutAddressInput>
    create: XOR<SaleCreateWithoutAddressInput, SaleUncheckedCreateWithoutAddressInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutAddressInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutAddressInput, SaleUncheckedUpdateWithoutAddressInput>
  }

  export type SaleUpdateManyWithWhereWithoutAddressInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutAddressInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    buyerName?: StringFilter<"Sale"> | string
    cpf?: StringFilter<"Sale"> | string
    price?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    installments?: IntFilter<"Sale"> | number
    cardNumber?: StringNullableFilter<"Sale"> | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    addressId?: StringFilter<"Sale"> | string
  }

  export type PajamaSizeCreateManyPajamaInput = {
    id?: string
    stockQuantity: number
    size: string
  }

  export type SalePajamasCreateManyPajamaInput = {
    quantity: number
    price: number
    saleId: string
  }

  export type PajamaSizeUpdateWithoutPajamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type PajamaSizeUncheckedUpdateWithoutPajamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type PajamaSizeUncheckedUpdateManyWithoutPajamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type SalePajamasUpdateWithoutPajamaInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    sale?: SaleUpdateOneRequiredWithoutPajamasNestedInput
  }

  export type SalePajamasUncheckedUpdateWithoutPajamaInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleId?: StringFieldUpdateOperationsInput | string
  }

  export type SalePajamasUncheckedUpdateManyWithoutPajamaInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleId?: StringFieldUpdateOperationsInput | string
  }

  export type SalePajamasCreateManySaleInput = {
    quantity: number
    price: number
    pajamaId: string
  }

  export type SalePajamasUpdateWithoutSaleInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    pajama?: PajamaUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SalePajamasUncheckedUpdateWithoutSaleInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    pajamaId?: StringFieldUpdateOperationsInput | string
  }

  export type SalePajamasUncheckedUpdateManyWithoutSaleInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    pajamaId?: StringFieldUpdateOperationsInput | string
  }

  export type SaleCreateManyAddressInput = {
    id?: string
    buyerName: string
    cpf: string
    price: number
    paymentMethod: string
    installments?: number
    cardNumber?: string | null
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: IntFieldUpdateOperationsInput | number
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pajamas?: SalePajamasUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: IntFieldUpdateOperationsInput | number
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pajamas?: SalePajamasUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: IntFieldUpdateOperationsInput | number
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}