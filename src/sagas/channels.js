// import { eventChannel } from 'redux-saga';
// import React from 'react';
//
// export function subscribe(socket, id) {
//     return eventChannel(emit => {
//         socket.on('users.login', ({ username }) => {
//             console.log(username)
//             // emit(actions.addUser({ username }));
//         });
//         socket.on('users.logout', ({ username }) => {
//             // emit(actions.removeUser({ username }));
//         });
//
//         socket.on(`notification.new_${id}`, ({notification:noti}) => {
//             console.log(noti);
//             // emit(actions.newNotification({ notification: noti }));
//         });
//         socket.on(`notification.remove_${id}`, ({notification}) => {
//             console.log(notification)
//             // emit(actions.removeNotification(notification));
//         });
//         socket.on('disconnect', e => {
//             // TODO: handle
//         });
//         return () => {};
//     });
// }