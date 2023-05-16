using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfSkeletonApp.Views;

namespace WpfSkeletonApp.ViewModels.DocumentPanes
{
    public class MapEditorPaneViewModel : DocumentPaneViewModelBase
    {
        private readonly MainWindowViewModel _mainWindow;
        
        #region Title Property
        public override string Title
        {
            get { return "MapEditor"; }
        }
        #endregion

        #region ContentId Property
        public override string ContentId
        {
            get { return GetHashCode().ToString(); }
        }
        #endregion

        public MapEditorPaneViewModel(MainWindowViewModel mainWindow)
        {
            _mainWindow = mainWindow;
        }
        
        public void SubmitEvent()
        {
            _mainWindow.OpenEventEditor();
        }
    }
}
