#!/usr/bin/env node

/**
 * Facebook Integration Setup Verification Script
 *
 * This script checks if your Facebook integration is properly configured
 * and helps identify any issues before running the application.
 */

const fs = require('fs');
const path = require('path');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkMark() {
  return `${colors.green}✓${colors.reset}`;
}

function crossMark() {
  return `${colors.red}✗${colors.reset}`;
}

function warningMark() {
  return `${colors.yellow}⚠${colors.reset}`;
}

console.log('\n' + '='.repeat(60));
log('Facebook Integration Setup Verification', 'cyan');
console.log('='.repeat(60) + '\n');

let hasErrors = false;
let hasWarnings = false;

// Check 1: .env file exists
log('1. Checking .env file...', 'blue');
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  log(`   ${checkMark()} .env file exists`, 'green');

  // Parse .env file
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const envVars = {};

  envContent.split('\n').forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      if (key) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    }
  });

  // Check required environment variables
  const requiredVars = ['FACEBOOK_PAGE_ID', 'FACEBOOK_ACCESS_TOKEN'];
  const optionalVars = ['FACEBOOK_APP_ID', 'FACEBOOK_APP_SECRET'];

  log('\n2. Checking required environment variables...', 'blue');
  requiredVars.forEach(varName => {
    if (envVars[varName] && envVars[varName] !== 'your_facebook_page_id_here' && envVars[varName] !== 'your_facebook_access_token_here') {
      log(`   ${checkMark()} ${varName} is set`, 'green');
    } else {
      log(`   ${crossMark()} ${varName} is missing or not configured`, 'red');
      hasErrors = true;
    }
  });

  log('\n3. Checking optional environment variables...', 'blue');
  optionalVars.forEach(varName => {
    if (envVars[varName] && envVars[varName] !== 'your_facebook_app_id_here' && envVars[varName] !== 'your_facebook_app_secret_here') {
      log(`   ${checkMark()} ${varName} is set`, 'green');
    } else {
      log(`   ${warningMark()} ${varName} is not set (optional)`, 'yellow');
      hasWarnings = true;
    }
  });
} else {
  log(`   ${crossMark()} .env file not found`, 'red');
  log(`   ${warningMark()} Please copy .env.example to .env and configure it`, 'yellow');
  hasErrors = true;
}

// Check 2: Required files exist
log('\n4. Checking required files...', 'blue');
const requiredFiles = [
  'src/lib/facebook-api.ts',
  'src/pages/api/facebook-posts.ts',
  'src/pages/api/facebook-posts/[id].ts',
  'src/pages/news-and-events.astro',
  'src/pages/news.astro',
  'src/pages/news/[id].astro',
  'src/components/news-section.tsx',
  'astro.config.ts',
];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    log(`   ${checkMark()} ${file}`, 'green');
  } else {
    log(`   ${crossMark()} ${file} is missing`, 'red');
    hasErrors = true;
  }
});

// Check 3: Astro config
log('\n5. Checking Astro configuration...', 'blue');
const astroConfigPath = path.join(__dirname, 'astro.config.ts');
if (fs.existsSync(astroConfigPath)) {
  const astroConfig = fs.readFileSync(astroConfigPath, 'utf-8');

  if (astroConfig.includes('output: "server"') || astroConfig.includes("output: 'server'")) {
    log(`   ${checkMark()} SSR mode enabled (output: "server")`, 'green');
  } else {
    log(`   ${crossMark()} SSR mode not enabled`, 'red');
    log(`   ${warningMark()} Add 'output: "server"' to astro.config.ts`, 'yellow');
    hasErrors = true;
  }
} else {
  log(`   ${crossMark()} astro.config.ts not found`, 'red');
  hasErrors = true;
}

// Check 4: Dynamic route configuration
log('\n6. Checking dynamic route configuration...', 'blue');
const dynamicRoutePath = path.join(__dirname, 'src/pages/news/[id].astro');
if (fs.existsSync(dynamicRoutePath)) {
  const dynamicRouteContent = fs.readFileSync(dynamicRoutePath, 'utf-8');

  if (dynamicRouteContent.includes('export const prerender = false')) {
    log(`   ${checkMark()} prerender disabled for dynamic route`, 'green');
  } else {
    log(`   ${crossMark()} prerender not disabled`, 'red');
    log(`   ${warningMark()} Add 'export const prerender = false;' to news/[id].astro`, 'yellow');
    hasErrors = true;
  }
} else {
  log(`   ${crossMark()} news/[id].astro not found`, 'red');
  hasErrors = true;
}

// Check 5: Dependencies
log('\n7. Checking dependencies...', 'blue');
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  const requiredDeps = {
    'astro': 'Astro framework',
    '@astrojs/react': 'React integration',
    'react': 'React library',
    'lucide-react': 'Icon library',
  };

  Object.entries(requiredDeps).forEach(([dep, description]) => {
    if (packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep]) {
      log(`   ${checkMark()} ${dep} (${description})`, 'green');
    } else {
      log(`   ${crossMark()} ${dep} is missing (${description})`, 'red');
      hasErrors = true;
    }
  });
} else {
  log(`   ${crossMark()} package.json not found`, 'red');
  hasErrors = true;
}

// Check 6: Documentation files
log('\n8. Checking documentation files...', 'blue');
const docFiles = [
  'FACEBOOK_SETUP.md',
  'FACEBOOK_INTEGRATION_README.md',
  'TROUBLESHOOTING.md',
  '.env.example',
];

docFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    log(`   ${checkMark()} ${file}`, 'green');
  } else {
    log(`   ${warningMark()} ${file} is missing (documentation)`, 'yellow');
    hasWarnings = true;
  }
});

// Summary
console.log('\n' + '='.repeat(60));
log('Summary', 'cyan');
console.log('='.repeat(60));

if (!hasErrors && !hasWarnings) {
  log('\n✓ All checks passed! Your setup looks good.', 'green');
  log('\nNext steps:', 'blue');
  log('1. Make sure you have configured your .env file with actual Facebook credentials');
  log('2. Run: npm install (if not already done)');
  log('3. Run: npm run dev');
  log('4. Visit: http://localhost:4321/news-and-events');
} else if (hasErrors) {
  log('\n✗ Setup has errors that need to be fixed.', 'red');
  log('\nPlease address the issues marked with ✗ above.', 'yellow');
  log('Refer to FACEBOOK_SETUP.md for detailed setup instructions.', 'yellow');
} else if (hasWarnings) {
  log('\n⚠ Setup is mostly complete but has some warnings.', 'yellow');
  log('\nThe application should work, but you may want to address the warnings.', 'yellow');
}

// Facebook API Test Instructions
if (!hasErrors) {
  console.log('\n' + '='.repeat(60));
  log('Testing Facebook API Connection', 'cyan');
  console.log('='.repeat(60));
  log('\nTo test your Facebook API connection, you can:', 'blue');
  log('\n1. Test directly with curl:', 'yellow');

  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const envVars = {};

    envContent.split('\n').forEach(line => {
      line = line.trim();
      if (line && !line.startsWith('#')) {
        const [key, ...valueParts] = line.split('=');
        if (key) {
          envVars[key.trim()] = valueParts.join('=').trim();
        }
      }
    });

    if (envVars.FACEBOOK_PAGE_ID && envVars.FACEBOOK_ACCESS_TOKEN) {
      log(`   curl "https://graph.facebook.com/${envVars.FACEBOOK_PAGE_ID}?access_token=${envVars.FACEBOOK_ACCESS_TOKEN}"`, 'cyan');
    }
  }

  log('\n2. Use Facebook Graph API Explorer:', 'yellow');
  log('   https://developers.facebook.com/tools/explorer/', 'cyan');

  log('\n3. Start the dev server and test the API endpoint:', 'yellow');
  log('   npm run dev', 'cyan');
  log('   Visit: http://localhost:4321/api/facebook-posts', 'cyan');
}

console.log('\n' + '='.repeat(60) + '\n');

// Exit with appropriate code
process.exit(hasErrors ? 1 : 0);
