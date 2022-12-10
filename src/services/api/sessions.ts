// import { Session } from './types';

// export const createSessionApi = () => ({
//   fetchSessions: async ({ nbSessions }: { nbSessions: number }): Promise<Session[]> => {
//     const reqUrl = `https://fm-interview-mock-api.herokuapp.com/api/v1/sessions?repeat=${nbSessions}`;

//     const response = await fetch(reqUrl, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.status !== 200) {
//       throw new Error('Unable to fetch sessions');
//     }

//     const json = await response.json();

//     return json.data.items;
//   },
//   fetchSessionDetails: async ({ customRef }: { customRef: string }) => {
//     const reqUrl = `https://fm-interview-mock-api.herokuapp.com/api/v1/sessions/${customRef}`;

//     const response = await fetch(reqUrl, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.status !== 200) {
//       throw new Error('Unable to fetch session Details');
//     }

//     const json = await response.json();
//     return json.data;
//   },
// });
