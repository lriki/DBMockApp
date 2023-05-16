using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfSkeletonApp.ViewModels.DocumentPanes
{
    public class MainGamePaneViewModel : DocumentPaneViewModelBase
    {
        #region Title Property
        public override string Title
        {
            get { return "MainGame"; }
        }
        #endregion

        #region ContentId Property
        public override string ContentId
        {
            get { return "MainGamePaneViewModel"; } 
        }
        #endregion
    }
}
