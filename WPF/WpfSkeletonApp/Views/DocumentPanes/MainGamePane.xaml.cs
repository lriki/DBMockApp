using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfSkeletonApp.Views.DocumentPanes
{
    /// <summary>
    /// MainGamePane.xaml の相互作用ロジック
    /// </summary>
    public partial class MainGamePane : UserControl
    {
        Process _gameServer;

        public MainGamePane()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if (_gameServer == null)
            {
                var dir = System.IO.Path.GetFullPath("../../../../force_20230516");

                ProcessStartInfo startInfo = new ProcessStartInfo();
                startInfo.FileName = "cmd";
                startInfo.Arguments = $"/c http-server {dir}";
                startInfo.RedirectStandardOutput = true;
                startInfo.RedirectStandardError = true;
                startInfo.UseShellExecute = false;
                startInfo.CreateNoWindow = true;

                _gameServer = new Process();
                _gameServer.StartInfo = startInfo;
                _gameServer.EnableRaisingEvents = true;
                _gameServer.Start();
                webView.Source = new Uri(@"http://127.0.0.1:8080");
            }
        }
    }
}
