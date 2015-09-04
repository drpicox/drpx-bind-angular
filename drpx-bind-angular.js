(function(angular) {
	'use strict';

	angular
		.module('drpxBindAngular', [])
		.directive('drpxBindAngular', drpxBindAngularDirective);

	drpxBindAngularDirective.$inject = ['$compile'];
	function drpxBindAngularDirective  ( $compile ) {
		var directive = {
			restrict: 'A',
			link: link
		};
		return directive;

		function link(scope, element, attrs) {
			var childScope;

			scope.$watch(attrs.drpxBindAngular, _update);

			function _update(newTemplate) {
				// update scope, it must have its own scope (destroy previous first)
				if (childScope) {
					childScope.$destroy();
				}
				childScope = scope.$new();

				// insert html into element
				element.html(newTemplate);

				// compile the angular html
				$compile(element.contents())(childScope);
			}
		}
	}

})(angular);



