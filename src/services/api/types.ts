// type Location = {
//   custom_ref: string;
//   name: string;
// };
// type Evse = {
//   custom_ref: string;
//   name: string;
//   location: Location;
// };
// type Token = {
//   visual_number: string;
//   is_rfid: boolean;
// };
// type Rating = {
//   score: number;
// };
// export type Session = {
//   custom_ref: string;
//   is_complete: boolean;
//   kwh: number;
//   cost: number;
//   currency: string;
//   evse: Evse[];
//   rating: Rating;
//   token: Token[];
//   start_datetime: string;
//   end_datetime: string;
// };

// export type SessionItem = {
//   item: {
//     custom_ref: string;
//     is_complete: boolean;
//     kwh: number;
//     cost: number;
//     currency: string;
//     evse: {
//       custom_ref: string;
//       name: string;
//       location: {
//         custom_ref: string;
//         name: string;
//       };
//     };
//     connector: {
//       standard: string;
//       power_type: string;
//       amperage: number;
//       voltage: number;
//     };
//     rating: {
//       score?: number;
//       comment?: string | null;
//       status: string;
//     };
//     token: {
//       visual_number?: string | null;
//       is_rfid: boolean;
//     };
//     tariff: {
//       custom_ref: string;
//       description: string;
//     };
//     start_datetime: string;
//     end_datetime: string;
//     charging_periods: {
//       start_date_time: string;
//       dimensions: {
//         type: string;
//         volume: number;
//       };
//     };
//   };
// };
