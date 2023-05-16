using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WpfSkeletonApp.ViewModels.AnchorablePanes;
using WpfSkeletonApp.Views;
using WpfSkeletonApp.Views.AnchorablePanes;
using WpfSkeletonApp.Views.DocumentPanes;

namespace WpfSkeletonApp.ViewModels
{
    public class MapEditorWindowViewModel : Conductor<object>
    {
        private readonly IWindowManager _windowManager;

        /// <summary>
        /// ドッキングドキュメントの ViewModel のリスト
        /// </summary>
        public ObservableCollection<DocumentPanes.DocumentPaneViewModelBase> DocumentPaneViewModels { get; private set; }

        /// <summary>
        /// ドッキングペインの ViewModel のリスト
        /// </summary>
        public ObservableCollection<AnchorablePanes.AnchorablePaneViewModelBase> AnchorablePaneViewModels { get; private set; }



        public AnchorablePanes.MapExplorerPaneViewModel MapExplorerPane { get; init; }
        public AnchorablePanes.AssetsPaneViewModel AssetsPane { get; init; }
        public AnchorablePanes.PropertiesPaneViewModel PropertiesPane { get; init; }
        

        public MapEditorWindowViewModel(IWindowManager windowManager)
        {
            _windowManager = windowManager;

            MapExplorerPane = new(this);
            AssetsPane = new();
            PropertiesPane = new();

            DocumentPaneViewModels = new()
            {
            };
            AnchorablePaneViewModels = new()
            {
                MapExplorerPane,
                AssetsPane,
                PropertiesPane,
            };
        }

        public bool CanFileMenu
        {
            get
            {
                return false;
            }
        }

        public void OpenMapEditor()
        {
            DocumentPaneViewModels.Add(new DocumentPanes.MapEditorPaneViewModel(this) { IsActive = true });
        }

        public void OpenEventEditor()
        {
            DocumentPaneViewModels.Add(new DocumentPanes.EventEditorPaneViewModel() { IsActive = true });
        }
    }
}
