﻿using System;
using System.Collections.Generic;
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
    /// MapEditorPane.xaml の相互作用ロジック
    /// </summary>
    public partial class MapEditorPane : UserControl
    {
        public MapEditorPane()
        {
            InitializeComponent();
        }

        private void ListBoxItem_MouseDoubleClick(object sender, MouseButtonEventArgs e)
        {
            var vm = (ViewModels.DocumentPanes.MapEditorPaneViewModel)DataContext;
            vm.SubmitEvent();
        }
    }
}
