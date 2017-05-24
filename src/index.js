import 'better-log/install';

module.exports = function(babel) {
	  const { types: t } = babel;
	  return {
	    name: "auto-import-aphrodite",
	    visitor: {
	      Identifier(path, { file }) {
	        if (path.node.name === "StyleSheet") {
	          file.set("hasAphrodite", true);
	        }
	      },
	      Program: {
	        enter(path, { file }) {
	          file.set("hasAphrodite", false);
	        },
	        exit({ node, scope }, { file }) {
	          if (!file.get("hasAphrodite") || scope.hasBinding("StyleSheet")) {
	            return;
	          }
	          const aphroditeImportDeclaration = t.importDeclaration(
	            [
	              t.ImportSpecifier(
	                t.identifier("StyleSheet"),
	                t.identifier("StyleSheet")
	              ),
	              t.ImportSpecifier(t.identifier("css"), t.identifier("css"))
	            ],
	            t.stringLiteral("aphrodite/no-important")
	          );
	          node.body.unshift(aphroditeImportDeclaration);
	        }
	      }
	    }
	  };
	}
