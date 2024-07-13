// import React, {
//     createContext,
//     FC,
//     ReactNode,
//     useContext,
//     useEffect,
//     useState,
//   } from 'react';
//   import { useTranslation } from 'react-i18next';
//
//
//   interface IAppContext {
//     theme: string;
//     snackbarOpen: boolean;a
//     confirmationDialogOpen: boolean;
//     confirmationDialogText: string;
//     confirmationDialogButtonLabel: string;
//     onConfirm: () => void;
//     openConfirmationDialog: (
//       text: string,
//       buttonLabel: string,
//       onConfirm: () => void,
//     ) => void;
//     closeConfirmationDialog: () => void;
//     snackbarSeverity: SnackbarSeverity;
//     snackbarText: string;
//     triggerSnackbar: (text: string, severity?: SnackbarSeverity) => void;
//     closeSnackbar: () => void;
//   }
//
//   export const AppContext = createContext<IAppContext>({
//     theme: 'dark',
//     snackbarOpen: false,
//     confirmationDialogOpen: false,
//     confirmationDialogText: '',
//     confirmationDialogButtonLabel: '',
//     onConfirm: () => {
//       //
//     },
//     openConfirmationDialog: () => {
//       //
//     },
//     closeConfirmationDialog: () => {
//       //
//     },
//     snackbarText: '',
//     snackbarSeverity: 'error',
//     triggerSnackbar: () => {
//       {
//       }
//     },
//     closeSnackbar: () => {
//       {
//       }
//     },
//   });
//
//   const AppContextProvider: FC<{
//     children: ReactNode;
//   }> = ({ children }) => {
//     const { user } = useContext(UserContext);
//
//     const { i18n } = useTranslation();
//
//     const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
//     const [snackbarText, setSnackbarText] = useState<string>('');
//     const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
//     const [confirmationDialogText, setConfirmationDialogText] = useState('');
//     const [confirmationDialogButtonLabel, setConfirmationDialogButtonLabel] =
//       useState('');
//     const [
//       confirmationDialogConfirmCallback,
//       setConfirmationDialogConfirmCallback,
//     ] = useState<() => void>(() => {
//       //
//     });
//
//     const [snackbarSeverity, setSnackbarSeverity] =
//       useState<SnackbarSeverity>('success');
//
//     const closeSnackbar = () => {
//       setSnackbarOpen(false);
//     };
//
//     const triggerSnackbar = (
//       text: string,
//       severity: SnackbarSeverity = 'success',
//     ) => {
//       setSnackbarText(text);
//       setSnackbarSeverity(severity);
//       setSnackbarOpen(true);
//     };
//
//     const openConfirmationDialog = (
//       text: string,
//       buttonLabel: string,
//       onConfirm: () => void,
//     ) => {
//       setConfirmationDialogText(text);
//       setConfirmationDialogButtonLabel(buttonLabel);
//       setConfirmationDialogConfirmCallback(() => onConfirm);
//       setConfirmationDialogOpen(true);
//     };
//
//     const closeConfirmationDialog = () => {
//       setConfirmationDialogOpen(false);
//       setConfirmationDialogText('');
//       setConfirmationDialogButtonLabel('');
//       setConfirmationDialogConfirmCallback(() => {
//         //
//       });
//     };
//
//     const onConfirm = () => {
//       closeConfirmationDialog();
//       try {
//         confirmationDialogConfirmCallback();
//       } catch (e) {}
//     };
//
//     useEffect(() => {
//       if (!user) return;
//
//       i18n.changeLanguage(user.clientLanguage);
//     }, [user]);
//
//     return (
//       <AppContext.Provider
//         value={{
//           theme: 'dark',
//           snackbarOpen,
//           snackbarText,
//           snackbarSeverity,
//           triggerSnackbar,
//           closeSnackbar,
//           confirmationDialogOpen,
//           confirmationDialogText,
//           confirmationDialogButtonLabel,
//           openConfirmationDialog,
//           closeConfirmationDialog,
//           onConfirm,
//         }}
//       >
//         {children}
//       </AppContext.Provider>
//     );
//   };
//
//   export default AppContextProvider;
//
