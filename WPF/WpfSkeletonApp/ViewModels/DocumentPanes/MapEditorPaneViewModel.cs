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
        private readonly MapEditorWindowViewModel _window;
        
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

        public MapEditorPaneViewModel(MapEditorWindowViewModel window)
        {
            _window = window;
        }
        
        public void SubmitEvent()
        {
            _window.OpenEventEditor();
        }
    }
}
