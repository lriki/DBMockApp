using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfSkeletonApp.ViewModels.AnchorablePanes
{
    public class MapExplorerPaneViewModel : AnchorablePaneViewModelBase
    {
        private readonly MapEditorWindowViewModel _window;

        #region Title Property
        public override string Title
        {
            get { return "マップ"; }
        }
        #endregion

        #region ContentId Property
        public override string ContentId
        {
            get { return "MapExplorerPaneViewModel"; }
        }
        #endregion

        public MapExplorerPaneViewModel(MapEditorWindowViewModel window)
        {
            _window = window;
        }

        public void SubmitMapItem()
        {
            _window.OpenMapEditor();
        }
    }
}
